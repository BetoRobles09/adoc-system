import React, { useReducer } from 'react';
import obraContext from './obraContext';
import obraReducer from './obraReducer';
import {
  OBTENER_OBRAS,
  AGREGAR_OBRA,
  OBRA_ERROR,
  VALIDAR_FORMULARIO,
  OBRA_ACTUAL,
  ELIMINAR_OBRA
} from '../../types';

import clienteAxios from '../../config/axios';

const ObraState = props => {
  const initialState = {
    obras : [],
    errorformulario: false,
    obra: null, 
    mensaje: null
  }
  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(obraReducer, initialState)
  // Serie de funciones para el CRUD
  // Obtener los proyectos
  const obtenerObras = async () => {
    try {
      const resultado = await clienteAxios.get('/api/obras');
      dispatch({
        type: OBTENER_OBRAS,
        payload: resultado.data.obras
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error al obtener las obras',
        categoria: 'alerta-error'
      }
      dispatch({
        type: OBRA_ERROR,
        payload: alerta
      })
    }
  }
  // Agregar nuevo proyecto
  const agregarObra = async obra => {
    try {
      const resultado = await clienteAxios.post('/api/obras', obra);
      console.log(resultado);
      // Insertar el proyecto en el state
      dispatch({
        type: AGREGAR_OBRA,
        payload: resultado.data
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error al agregar la obra',
        categoria: 'alerta-error'
      }
      dispatch({
        type: OBRA_ERROR,
        payload: alerta
      })
    }
  }
  // Valida el formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }
  // Selecciona el Proyecto que el usuario dio click
  const obraActual = obraId => {
    dispatch({
      type: OBRA_ACTUAL,
      payload: obraId
    })
  }
  // Elimina un proyecto
  const eliminarObra = async obraId => {
    try {
      await clienteAxios.delete(`/api/obras/${obraId}`);
      dispatch({
        type: ELIMINAR_OBRA,
        payload: obraId
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error al eliminar la obra',
        categoria: 'alerta-error'
      }
      dispatch({
        type: OBRA_ERROR,
        payload: alerta
      })
    }
  }
  
  return (
  <obraContext.Provider
    value={{
      obras: state.obras,
      errorformulario: state.errorformulario,
      obra: state.obra,
      mensaje: state.mensaje,
      obtenerObras,
      agregarObra,
      mostrarError,
      obraActual,
      eliminarObra
    }}
  >
    {props.children}
  </obraContext.Provider>
        
    )
}

export default ObraState;