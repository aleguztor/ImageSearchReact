import React from 'react';
const Paginacion = props =>{
    return(
        <div>
            <button onClick={props.paginaAnterior} type='button' className='boton'>Anterior</button>
            <button onClick={props.paginaSiguiente} type='button' className='boton'>Siguiente</button>

        </div>
    )
}
export default Paginacion;