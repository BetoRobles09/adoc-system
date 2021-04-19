
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './components/layout/Sidebar'
import Bar from './components/layout/Bar'

import NuevaObra from './components/obras/NuevaObra'
import EditarObra from './components/obras/EditarObra'
import ListaObras from './components/obras/ListaObras'

function App() {
  return (
    <Router>
      <div className="contenedor-app">
      <Sidebar />
        <div className="seccion-principal">
          <Bar />
          <main>
            <div className="contenedor-tareas">
            <Switch>
              <Route exact path='/obras/nueva-obra' component={NuevaObra} />
              <Route exact path='/obras/editar/:id' component={EditarObra} />
              <Route exct path='/obras' component={ListaObras} />
            </Switch>
            </div>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
