import { useHistory } from "react-router"

const NuevaObra = () => {
  const history = useHistory()

  const onSubmit = e => {
    e.preventDefault()
    history.push("/obras");
  }

  return ( 
    <div className="formulario">
      <h2>Agregar una obra</h2>
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input type="text" className="input-text" placeholder="Nombre de la obra" name="nombre" />
        </div>
        <div className="contenedor-input">
          <input type="text" className="input-text" placeholder="Cliente" name="cliente" />
        </div>
        <div className="contenedor-input">
          <input type="text" className="input-text" placeholder="Ubicación" name="ubicacion" />
        </div>
        <div className="contenedor-input">
          <input type="date" className="input-text" placeholder="Fecha de inicio:" name="fecha_inicio" />
        </div>
        <div className="contenedor-input">
          <input type="date" className="input-text" placeholder="Fecha de fin:" name="fecha_fin" />
        </div>
        <div className="contenedor-input">
          <input type="text" className="input-text" placeholder="Plazo" name="plazo" />
        </div>
        <div className="contenedor-input">
          <input type="submit" className="btn btn-primario btn-submit btn-block" value='Agregar' />
        </div>
      </form>
    </div>
   )
}

export default NuevaObra