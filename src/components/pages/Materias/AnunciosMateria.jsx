import React, { useEffect, useState } from "react";
import Container from "../../layout/Container";
import { Link, useHistory } from "react-router-dom";
import "./styles/DetallesMateria.css";
import { getMateriaById, limpiarMateria } from "../../../actions/materias";
import { getAnunciosMateria } from "../../../actions/anuncios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderMateria from "./Views/HeaderMateria";

const AnunciosMateria = ({
  auth,
  getAnunciosMateria,
  anunciosMateria: { anunciosMateria, loadingMateria },
  getMateriaById,
  limpiarMateria,
  materia: { materia, loading },
  match,
}) => {
  const history = useHistory();
  useEffect(() => {
    getMateriaById(match.params.id);
  }, [getMateriaById]);
  useEffect(() => {
    getAnunciosMateria(match.params.id);
  }, [getAnunciosMateria]);

  console.log(anunciosMateria);
  //console.log(loadingMateria)

  //console.log(materia)
  const [mostrarComentarios, setMostrarComentarios] = useState(false);

  return (
    <Container>
      {loading || materia === null ? (
        <div>
          <h1>Cargando..</h1>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="container">
            <div className="profile-env">
              <button
                className="btn btn-warning"
                onClick={() => {
                  history.goBack();
                  limpiarMateria();
                }}
              >
                Volver
              </button>
              <br></br><br></br>
              <hr></hr><hr></hr>
              <HeaderMateria
              descripcionMateria= {materia.descripcionMateria}
              profTitular = {`${materia.profTitular.nombre}  ${materia.profTitular.apellido}`}
              profAux = {`${materia.profAux.nombre}  ${materia.profAux.apellido}`}
              idMateria = {materia._id}
              rol={auth.user.perfiles[0].tipo[0]}
              classEstado = "active"
              />
              <section className="profile-feed">
                { !auth.loading && auth.user.perfiles[0].tipo[0].administrador === true &&
                    <form className="profile-post-form" method="post">
                    <textarea
                      className="form-control autogrow"
                      placeholder="Que quieres publicar?"
                      style={{
                        overflow: "hidden",
                        wordWrap: "break-word",
                        resize: "horizontal",
                        height: "80px",
                      }}
                    ></textarea>
                    <div className="form-options">
                      <div className="post-submit">
                        <button type="button" className="btn btn-primary">
                          Publicar
                        </button>
                      </div>
                    </div>
                  </form>
                }

                <div className="profile-stories">
                  {loadingMateria || anunciosMateria == [] ? (
                    <div>
                      <h1>Cargando..</h1>
                    </div>
                  ) : (
                    <>
                      {anunciosMateria.map((item) => {
                        return (
                          <article className="story">
                            <aside className="user-thumb">
                              <a href="#">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                  width="44"
                                  alt=""
                                  className="img-circle"
                                />{" "}
                              </a>
                            </aside>
                            <div className="story-content">
                              <header>
                                <div className="publisher">
                                  <a href="#">
                                    {item.autorNombre.nombre}{" "}
                                    {item.autorNombre.apellido}
                                  </a>
                                  <em>{item.fecha}</em>
                                </div>
                                <div className="story-type">
                                  <i className="entypo-feather"></i>
                                </div>
                              </header>
                              <div className="story-main-content">
                                <p>{item.contenido}</p>
                              </div>

                              <footer>
                                {mostrarComentarios === false ? (
                                  <a
                                    href="#"
                                    onClick={() => {
                                      setMostrarComentarios(
                                        !mostrarComentarios
                                      );
                                    }}
                                  >
                                    <i className="entypo-comment"></i>
                                    Ver Comentarios
                                    <span>({item.comentarios.length})</span>
                                  </a>
                                ) : (
                                  <a
                                    href="#"
                                    onClick={() => {
                                      setMostrarComentarios(
                                        !mostrarComentarios
                                      );
                                    }}
                                  >
                                    <i className="entypo-comment"></i>
                                    Ocultar Comentarios
                                    <span>({item.comentarios.length})</span>
                                  </a>
                                )}
                                <ul className="comments">
                                  {mostrarComentarios === true ? (
                                    <>
                                      {item.comentarios.map((comentario) => {
                                        return (
                                          <li>
                                            <div className="user-comment-thumb">
                                              <img
                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                alt=""
                                                className="img-circle"
                                                width="30"
                                              />
                                            </div>
                                            <div className="user-comment-content">
                                              <a
                                                href="#"
                                                className="user-comment-name"
                                              >
                                                {comentario.autor.nombre}{" "}
                                                {comentario.autor.apellido}
                                              </a>
                                              <p>{comentario.descripcion}</p>
                                              <div className="user-comment-meta">
                                                <a
                                                  href="#"
                                                  className="comment-date"
                                                >
                                                  {comentario.fechaComentario}
                                                </a>
                                              </div>
                                            </div>
                                            {!auth.loading &&
                                              comentario?.autor._id ===
                                                auth.user._id && (
                                                <div>
                                                  <button className="btn btn-danger text-white">
                                                    <i class="m-r-10 mdi mdi-delete-forever"></i>
                                                  </button>
                                                </div>
                                              )}
                                          </li>
                                        );
                                      })}
                                    </>
                                  ) : null}
                                  <li className="comment-form">
                                    <div className="user-comment-thumb">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                        alt=""
                                        className="img-circle"
                                        width="30"
                                      />
                                    </div>
                                    <div className="user-comment-content">
                                      <textarea
                                        className="form-control autogrow"
                                        placeholder="Escribir un comentario"
                                        style={{
                                          overflow: "hidden",
                                          wordWrap: "break-word",
                                          resize: "horizontal",
                                          /* height: "46px", */
                                          minWidth: "100%",
                                        }}
                                      ></textarea>
                                      <button className="btn">
                                        <i className="entypo-chat"></i>
                                        Comentar
                                      </button>
                                    </div>
                                  </li>
                                </ul>
                              </footer>
                              <hr></hr>
                            </div>
                          </article>
                        );
                      })}
                    </>
                  )}

                  {/* <div className="text-center">
                  <a href="#" className="btn btn-default btn-icon icon-left">
                    <i className="entypo-hourglass"></i>
                    Load More …
                  </a>
                </div> */}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

AnunciosMateria.propTypes = {
  getMateriaById: PropTypes.func.isRequired,
  limpiarMateria: PropTypes.func.isRequired,
  materia: PropTypes.object.isRequired,
  getAnunciosMateria: PropTypes.func.isRequired,
  anunciosMateria: PropTypes.object.isRequired,
  auth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  materia: state.materias,
  anunciosMateria: state.anuncios,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getMateriaById,
  limpiarMateria,
  getAnunciosMateria,
})(AnunciosMateria);
