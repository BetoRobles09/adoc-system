import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom'

import ListaObras from '../obras/ListaObras';
import AuthContext from '../../context/autenticacion/authContext';

const Proyectos = () => {
  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;
  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, [])
  return (
    <main>
      <div className="contenedor-tareas">
        <div className='formulario'>
          <h2>Listado de obras</h2>
          <Link to='/obras/nueva-obra' className='btn btn-primario btn-submit btn-block'>Nueva obra</Link>
        </div>
        <ListaObras />
      </div>
    </main>
  )
}
 
export default Proyectos

