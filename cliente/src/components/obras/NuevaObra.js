import React, { useState, useContext } from 'react';
import obraContext from '../../context/obras/obraContext';
import { Link } from 'react-router-dom'

const NuevaObra = () => {
  // Obtener el state del formulario
  const obrasContext = useContext(obraContext);
  const { agregarObra, mostrarError } = obrasContext;
  // State para Proyecto
  const [obra, setObra] = useState({
      nombre: '',
      cliente: '',
      ubicacion: '',
      fechaInicio: '',
      fechaFin: '',
      plazo: ''
  });

  // Extraer nombre de proyecto
  const { nombre, cliente, ubicacion, fechaInicio, fechaFin, plazo } = obra;

  // Lee los contenidos del input
  const onChangeObra = e => {
    setObra({
      ...obra,
      [e.target.name] : e.target.value
    })
  }
  // Cuando el usuario envia un proyecto
  const onSubmitObra = e => {
    e.preventDefault();
    // Validar el proyecto
    if(nombre === '' || cliente === '' || ubicacion === '' || fechaInicio === '' || fechaFin === '' || plazo === '') {
      mostrarError();
      return;
    }
    // agregar al state
    agregarObra(obra)
    // Reiniciar el form
    setObra({
      nombre: '',
      cliente: '',
      ubicacion: '',
      fechaInicio: '',
      fechaFin: '',
      plazo: ''
    })
  }
  return (
    <form className='formulario' onSubmit={onSubmitObra}>
      <h2>Agregar una obra</h2>
      <div className="contenedor-input">
        <input type="text" className="input-text" placeholder="Nombre de la obra" name="nombre" value={nombre} onChange={onChangeObra} />
      </div>
      <div className="contenedor-input">
        <input type="text" className="input-text" placeholder="Cliente" name="cliente" value={cliente} onChange={onChangeObra} />
      </div>
      <div className="contenedor-input">
        <input type="text" className="input-text" placeholder="Ubicación" name="ubicacion" value={ubicacion} onChange={onChangeObra} />
      </div>
      <div className="contenedor-input">
        <input type="date" className="input-text" placeholder="Fecha de inicio:" name="fechaInicio" value={fechaInicio} onChange={onChangeObra} />
      </div>
      <div className="contenedor-input">
        <input type="date" className="input-text" placeholder="Fecha de fin:" name="fechaFin" value={fechaFin} onChange={onChangeObra} />
      </div>
      <div className="contenedor-input">
        <input type="text" className="input-text" placeholder="Plazo" name="plazo" value={plazo} onChange={onChangeObra} />
      </div>
      <div className="contenedor-input">
        <input type="submit" className="btn btn-primario btn-submit" value='Agregar' />
        <Link to='/obras' className='btn btn-primario btn-submit'>Regresar</Link>
      </div>
    </form>
   )
}

export default NuevaObra