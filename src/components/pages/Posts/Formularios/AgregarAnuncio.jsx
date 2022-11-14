import React, { useEffect, useState } from "react";
import Container from "../../../layout/Container";
import { crearAnuncio } from "../../../../actions/anuncios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {  Redirect, useHistory } from "react-router-dom";

const AgregarAnuncio = ({ crearAnuncio }) => {
  const [contenido, setContenido] = useState("");
  const [tipo, setTipo] = useState("Global");
  const [imagenURL, setImagenURL] = useState("https://media.infocielo.com/p/2a4cf89db4744e221bfbf49d95a69712/adjuntos/299/imagenes/001/533/0001533489/887x0/smart/escuelas-mundialjpg.jpg");
  const [anuncioEnviado, setAnuncioEnviado] = useState(false);

  useEffect(()=>{
    return <Redirect to='/anuncios' />
  },[anuncioEnviado])

  const history = useHistory()
  
  return (
    <Container>
      <div className="container-fluid">
        <div className="container">
          <div className="containerLogin"></div>
          <div className="formlogin">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                crearAnuncio({ contenido,tipo,imagenURL });
                setContenido("");
                setAnuncioEnviado(!anuncioEnviado)
                history.goBack()
              }}
              className="login-form"
              
            >
              <label>
                <strong>Crear la publicacion</strong>
              </label>
              <textarea
                name="contenido"
                /* cols="30" */
                rows="5"
                required
                value={contenido}
                className="inputLogin"
                placeholder="Ingresar la descripcion del anuncio"
                onChange={(e)=>setContenido(e.target.value)}
              ></textarea>
              <br></br>
              <br></br>
              <button type="submit" className="buttomLogin">
                <i className="fa fa-lock"></i> Publicar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

AgregarAnuncio.propTypes = {
    crearAnuncio: PropTypes.func.isRequired,
}

export default connect(null, {crearAnuncio})(AgregarAnuncio)
