import React, { useEffect, useState } from "react";
import Container from "../../layout/Container";
import { Link, useHistory } from "react-router-dom";
import "./styles/DetallesMateria.css";
import { getMateriaById, limpiarMateria } from "../../../actions/materias";
import { getAnunciosMateria } from "../../../actions/anuncios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderMateria from "./Views/HeaderMateria";

const InasistenciaMateria = ({
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
              <section className="profile-Notas">
                
                <h1>InasistenciaMateria</h1>
              </section>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

InasistenciaMateria.propTypes = {
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
})(InasistenciaMateria);