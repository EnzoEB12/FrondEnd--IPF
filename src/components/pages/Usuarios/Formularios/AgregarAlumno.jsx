import React, { useState, useEffect } from 'react'
import Container from '../../../layout/Container'
import {  crearAlumno, limpiarAlumnos } from "../../../../actions/usuarios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {  Link, Redirect, useHistory } from "react-router-dom";

const AgregarAlumno = ({crearAlumno ,limpiarAlumnos}) => {
 
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [fotoURL, setFotoURL] = useState("");
    


    

    return (
        <Container>
                <div className="container-fluid">
                <div className="container">
      <div className="containerLogin">
            <div className="info">
                <h1 className="h1Titulo">Registrar un nuevo alumno</h1>
            </div>
            </div>
            <div className="formlogin">
           
            <form className="login-form" 
            onSubmit={(e) => {
                e.preventDefault();
                crearAlumno(
                    {
                        nombre,
                        apellido,
                        dni,
                        email,
                        contrasena,
                        fotoURL,
                        perfiles: [
                          {
                            tipo: [
                              {
                                alumno: true,
                              },
                            ],
                            dataAlumno: [
                              {
                                carrera:"Desarrollo del software",
                                analitico: null,
                                certificadoDomicilio: null,
                              },
                            ],
                          },
                        ],
                      });
                setNombre("");
                setApellido("");
                setDni("");
                setEmail("");
                setContrasena("");
                setFotoURL("");
                
                
              }}>
            <input type="text" 
                className="inputLogin"
                    placeholder="Nombre" 
                    name="nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <input type="text" 
                className="inputLogin"
                    placeholder="Apellido" 
                    name="apellido"
                    value={apellido}
                    onChange={e => setApellido(e.target.value)}
                />
                
            <input type="text" 
                className="inputLogin"
                    placeholder="DNI" 
                    name="dni"
                    value={dni}
                    onChange={e => setDni(e.target.value)}
                />
                <input type="text" 
                className="inputLogin"
                    placeholder="Email" 
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="text" 
                className="inputLogin"
                    placeholder="Contraseña" 
                    name="contrasena"
                    value={contrasena}
                    onChange={e => setContrasena(e.target.value)}
                />
                <input type="text" 
                className="inputLogin"
                    placeholder="Foto de perfil URL" 
                    name="fotoURL"
                    value={fotoURL}
                    onChange={e => setFotoURL(e.target.value)}
                />
                
                <button  type="submit" className="buttomLogin"><i className="fa fa-lock"></i> Registrar</button>
                <br></br><br></br>
                <Link to="/lista-alumnos" className="btn btn-info text-white">Cancelar</Link>
                
            </form>
           
            </div>
      </div>
                </div>
                
        </Container>
    )
}

AgregarAlumno.propTypes = {
    crearAlumno: PropTypes.func.isRequired,
    limpiarAlumnos: PropTypes.func.isRequired,
}

export default connect(null, {crearAlumno,limpiarAlumnos})(AgregarAlumno)