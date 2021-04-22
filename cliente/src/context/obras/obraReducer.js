import {
  OBTENER_OBRAS,
  AGREGAR_OBRA,
  OBRA_ERROR,
  VALIDAR_FORMULARIO,
  OBRA_ACTUAL,
  ELIMINAR_OBRA
} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case OBTENER_OBRAS:
      return {
        ...state,
        obras: action.payload
      }
    case AGREGAR_OBRA:
      return {
        ...state,
        obras: [...state.obras, action.payload]
      }
    case VALIDAR_FORMULARIO:
      return {
        ...state, 
        errorformulario: true
      }
    case OBRA_ACTUAL:
      return {
        ...state,
        obra: state.obra.filter(obra => obra._id === action.payload )
      }
    case ELIMINAR_OBRA:
      return {
        ...state,
        obras: state.obras.filter(obra => obra._id !== action.payload ),
        obra: null
      }
    case OBRA_ERROR:
      return {
        ...state,
        mensaje: action.payload
      }
    default:
      return state;
  }
}