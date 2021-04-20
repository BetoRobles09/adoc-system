
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta'

import Sidebar from './components/layout/Sidebar'
import Bar from './components/layout/Bar'

import NuevaObra from './components/obras/NuevaObra'
import EditarObra from './components/obras/EditarObra'
import ListaObras from './components/obras/ListaObras'

import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import tokenAuth from './config/token';
import RutaPrivada from './components/rutas/RutaPrivada'

// Revisar si tenemos un token
const token = localStorage.getItem('token')
if(token) {
  tokenAuth(token)
}

function App() {
  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <div className="contenedor-app">
              <div className="seccion-principal">
                <main>
                  <div className="contenedor-tareas"></div>
                  <Sidebar />
                  <Bar />
                  <RutaPrivada exact path="/obras" component={ListaObras} />
                  <RutaPrivada exact path="/obras/nueva-obra" component={NuevaObra} />
                  <RutaPrivada exact path="/obras/editar/:id" component={EditarObra} />
                </main>
              </div>
            </div>
          </Switch>    
        </Router>
      </AuthState>
    </AlertaState>
  )
}

export default App
