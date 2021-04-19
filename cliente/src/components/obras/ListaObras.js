import { Link } from 'react-router-dom'


const ListaObras = () => {
  return ( 
    <div className='contenedor-tarea'>
      <Link to='/obras/nueva-obra' className='btn btn-primario btn-block'>Nueva Obra</Link>
    </div>
   );
}

export default ListaObras;