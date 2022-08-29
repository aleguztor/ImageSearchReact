import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
import styles from './App.css'

class App extends React.Component {

  state= {
    termino:'',
    imagenes: [],
    pagina:''
  }
  scroll= ()=>{
    const elemento = document.querySelector('.container');
    elemento.scrollIntoView('smooth', 'end');
  }
  paginaAnterior =()=>{
    let pagina= this.state.pagina;
    if(pagina===1)return null;
    pagina--;
    this.setState({
      pagina}, ()=>{
      this.consultarApi();
      this.scroll();
    });
  }
  paginaSiguiente=()=>{

    let pagina= this.state.pagina;
    pagina++;

    this.setState({
      pagina
    }, ()=>{
      this.consultarApi();
      this.scroll();
    });
  }
  consultarApi=()=>{
    const pagina= this.state.pagina;
    const url=`https://pixabay.com/api/?key=29584079-e27223c407624466907df4573&q=${this.state.termino}&page=${pagina}`;
    console.log(url);

    fetch(url).then(res => res.json())
    .then(res => this.setState({imagenes: res.hits}));
  }

  datosBusqueda=(termino)=>{
    this.setState({
      termino : termino,
      pagina:1
    }, ()=>{
      this.consultarApi();
    })
  }

  render() {
    return(
        <div className="container">
      <div className=" container2">
        <h2 className=" "> Buscador de imagenes con React</h2>

        <Buscador
          datosBusqueda={this.datosBusqueda}
        />
      </div>
      <Resultado
        imagenes={this.state.imagenes}
        paginaAnterior={this.paginaAnterior}
        paginaSiguiente={this.paginaSiguiente}
        
      />
    </div>
  );
 }
}

export default App;
