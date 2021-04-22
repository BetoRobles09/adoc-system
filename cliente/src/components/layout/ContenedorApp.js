import Sidebar from './Sidebar'
import NuevaObra from '../obras/NuevaObra'
import SeccionObras from '../obras/SeccionObras'
import Bar from './Bar'

import RutaPrivada from '../rutas/RutaPrivada'

const ContenedorApp = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Bar />
        <RutaPrivada exact path="/obras" component={SeccionObras} />
        <RutaPrivada exact path="/obras/nueva-obra" component={NuevaObra} />
      </div>
    </div>
  )
}

export default ContenedorApp
