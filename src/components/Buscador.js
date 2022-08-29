import React, {Component} from 'react';
import App from '../App';



class Buscador extends React.Component{
    busquedaRef = React.createRef();

    obtenerDatos= (e)=>{
        e.preventDefault();

        const termino= this.busquedaRef.current.value;

        this.props.datosBusqueda(termino);
    }

    render(){
        return(

        <form onSubmit={this.obtenerDatos}>
            <div className='buscador'>
                <div className='formulario'>
                    <input ref={this.busquedaRef} type='text' className='entrada'
                    placeholder='Busca tu imagen.'
                    />
                </div>
                <div>
                    <input type='submit' className='boton' value='Buscar'></input>

                </div>
                
            </div>
        </form>
        );
    }
}
export default Buscador;