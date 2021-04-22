
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta'
import ContenedorApp from './components/layout/ContenedorApp'

import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import ObraState from './context/obras/obraState'
import tokenAuth from './config/token';

// Revisar si tenemos un token
const token = localStorage.getItem('token')
if(token) {
  tokenAuth(token)
}

function App() {
  return (
   <ObraState>
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <ContenedorApp />
          </Switch>    
        </Router>
      </AuthState>
    </AlertaState>
   </ObraState>
  )
}

export default App
