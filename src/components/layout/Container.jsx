import React from "react";
import { logout } from '../../actions/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import imgUser from '../../assets/img/d2.jpg'
import { Link } from "react-router-dom";

const Container = ({ children, logout}) => {



    //console.log(children)
  return (

    <>
    
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
    >
    <header className="topbar" data-navbarbg="skin6">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header" data-logobg="skin6">
                    
                    <a className="navbar-brand" href="index.html">
                       
                        <b className="logo-icon">
                            <i className="wi wi-sunset"></i> 
                            
                            {/* <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                           
                            <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" /> */}
                        </b>
                        
                        <span className="logo-text">
                           
                            <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                           
                            <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                        </span>
                    </a>
                    
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i
                            className="mdi mdi-menu"></i></a>
                </div>
               
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                   
                    <ul className="navbar-nav float-start me-auto">
                    </ul>
                   
                    <ul className="navbar-nav float-end">
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={imgUser} alt="user" className="rounded-circle" width="31"/>
                              
                            </a>
                            
                            <ul className="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="javascript:void(0)"><i className="ti-user m-r-5 m-l-5"></i> Mi Perfil</a>
                                <a className="dropdown-item" href="javascript:void(0)" onClick={logout}><i className="ti-logout m-r-5 m-l-5"></i> Cerrar Sesion</a>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        
        <aside className="left-sidebar" data-sidebarbg="skin6">
          <div className="scroll-sidebar">
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
              <li className="sidebar-item">
                  {" "}
                  <Link to="/Home"
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="index.html"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-view-dashboard"></i>
                    <span className="hide-menu">Home</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  {" "}
                  <Link to="/materias"
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="index.html"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-view-dashboard"></i>
                    <span className="hide-menu">Materias</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  {" "}
                  <Link to="/anuncios"
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-account-network"></i>
                    <span className="hide-menu">Anuncios</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  {" "}
                  <Link to="/lista-alumnos"
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    aria-expanded="false"
                  >
                    <i className="m-r-10 mdi mdi-code-equal"></i>
                    <span className="hide-menu">Lista Alumnos</span>
                  </Link>
                </li>
               {/*  <li className="sidebar-item">
                  {" "}
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="table-basic.html"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-border-all"></i>
                    <span className="hide-menu">Table</span>
                  </a>
                </li> */}
                {/* <li className="sidebar-item">
                  {" "}
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="icon-material.html"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-face"></i>
                    <span className="hide-menu">Icon</span>
                  </a>
                </li> */}
                {/* <li className="sidebar-item">
                  {" "}
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="starter-kit.html"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-file"></i>
                    <span className="hide-menu">Blank</span>
                  </a>
                </li> */}
               {/*  <li className="sidebar-item">
                  {" "}
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="error-404.html"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-alert-outline"></i>
                    <span className="hide-menu">404</span>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </aside>
        <div className="page-wrapper">
          <div className="page-breadcrumb">
            <div className="row align-items-center">
              <div className="col-6">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0 d-flex align-items-center">
                    <li className="breadcrumb-item">
                      <a href="index.html" className="link">
                        <i className="mdi mdi-home-outline fs-4"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                     Home
                    </li>
                  </ol>
                </nav>
                <h1 className="mb-0 fw-bold">Institulo Tecnologico IPF</h1>
              </div>
            </div>
          </div>
          {children}
          <footer className="footer text-center">
                Copyright by <a
                    href="https://github.com/EnzoEB12">Enzo12</a>.
            </footer>
        </div>
        
      </div>
    </>
    
  );
};

Container.propTypes = {
    logout : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth: state.auth
  }) 
  
  export default connect(mapStateToProps, {logout})(Container)
