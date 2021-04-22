import React, { useContext, useEffect } from 'react';
import Obra from './Obra'
import obraContext from '../../context/obras/obraContext'
import AlertaContext from '../../context/alertas/alertaContext'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ListaObras = () => {
  // Extrar proyectos de state inicial
  const obrasContext = useContext(obraContext);
  const { mensaje, obras, obtenerObras } = obrasContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;
  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    // si hay un error
    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerObras();
    // eslint-disable-next-line
  }, [mensaje]);

  // revisar si proyectos tiene contenido
  if(obras.length === 0 ) return <p>No hay obras, comienza creando uno</p>;

  return (
    <ul className="listado-tareas">
      { alerta   ? ( <div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>  ) : null  }
      <TransitionGroup>
        {obras.map(obra => (
        <CSSTransition key={obra._id} timeout={200} classNames="proyecto" >
          <Obra obra={obra} />
        </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
}

export default ListaObras;