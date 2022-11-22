import axios from 'axios'

import { 
GET_ALUMNOS,
LIMPIAR_ALUMNOS,
ERROR_ALUMNO,
AGREGAR_ALUMNO,
LIMPIAR_ANUNCIO,
LIMPIAR_MATERIA,
} from "./types"; 

export const getAlumnos = () => async dispatch => {
    dispatch({type: LIMPIAR_ANUNCIO})
    dispatch({type: LIMPIAR_ALUMNOS})
    dispatch({type: LIMPIAR_MATERIA})


    try {
        const res = await axios.get('http://localhost:4000/api/traer-alumnos')
        console.info(res)
        dispatch({
            type: GET_ALUMNOS,
            payload: res.data
        })
        
    } catch (err) {
        dispatch({
            type: ERROR_ALUMNO,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}


//Agregar Alumno
export const crearAlumno = formData => async dispatch => {
    dispatch({type: LIMPIAR_ALUMNOS})
    
    const config = {headers : {'Content-Type':'application/json'}}
    
      
    try {
        
        
    

        const res = await axios.post(`http://localhost:4000/api/agregar-alumno`, formData, config)
    
        /* dispatch(setAlert('Post creado', 'success')) */
        console.log(res)
            
        dispatch({
            type: AGREGAR_ALUMNO,
            payload: res.data
        })

    } catch (err) {

        if(err.response){
            dispatch({
                type: ERROR_ALUMNO,
                payload: { 
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
}


export const limpiarAlumnos = () => {
    dispatch({
        type: LIMPIAR_ALUMNOS,
        payload: null
    })
}