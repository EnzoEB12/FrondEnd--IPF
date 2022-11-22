import { 
    GET_ALUMNOS,
    LIMPIAR_ALUMNOS,
    ERROR_ALUMNO,
    AGREGAR_ALUMNO
} from "../actions/types"; 

const initialState = {
    usuarios: [],
    usuario: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action

    switch(type){
        case GET_ALUMNOS:
            return {
                ...state,
                usuarios: payload,
                loading: false
            };  
        case LIMPIAR_ALUMNOS:
            return {
                ...state,
                usuarios: payload,
                loading: false
            }; 
        case ERROR_ALUMNO:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case AGREGAR_ALUMNO:
            return {
                ...state,
                usuarios: [payload, ...state.usuarios],
                loading: false
            };
        default:
            return state         
    }

}