import { Link } from 'react-router-dom'

const Sidebar = () => {
  return ( 
    <aside>
      <h1>ADOC <span>Systems</span></h1>
      <ul className="listado-proyectos">
        <li>
          <Link to='/' className="btn btn-block">Inicio</Link>
          <Link to='/obras' className="btn btn-block">Obras</Link>
        </li>
      </ul>
    </aside>
   )
}

export default Sidebar