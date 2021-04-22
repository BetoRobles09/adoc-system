
import { useContext} from 'react'
import obraContext from '../../context/obras/obraContext'

const Obra = ({obra}) => {
  // Extrar proyectos de state inicial
  const obrasContext = useContext(obraContext);
  const { eliminarObra } = obrasContext;
  // Array destructuring para extraer el proyecto actual
  const obraActual  =  obra;
  // Elimina un proyecto
  const onClickEliminar = () => {
    eliminarObra(obraActual._id)
  }

  return (
    <li className="tarea sombra">
      <p>{obra.nombre}</p>
      <div className="acciones">
        <button type="button" className="btn btn-primario">Editar</button>
        <button type="button" className="btn btn-secundario" onClick={onClickEliminar}>Eliminar</button>
      </div>
    </li>
  )
}

export default Obra
