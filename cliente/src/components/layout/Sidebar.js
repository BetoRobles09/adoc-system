import { Link } from 'react-router-dom'

const Sidebar = () => {
  return ( 
    <aside>
      <h1>ADOC <span>Systems</span></h1>
        <div className="proyectos">
            <Link className='enlace-cuenta' to='/'>Inicio</Link>
            <Link className='enlace-cuenta' to='/obras'>Obras</Link>
        </div>
    </aside>
   )
}

export default Sidebar