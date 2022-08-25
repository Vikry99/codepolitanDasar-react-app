import React, { Component } from 'react';
import './App.css';
import MenuMakanan from './components/MenuMakanan';
import MenuMinuman from './components/MenuMinuman';


class App extends Component {
 constructor(){
  super()
  this.state = {
    namaResto: 'Resto Vikry Ramadhan'
  }
  this.handlerGantiNamaResto = this.handlerGantiNamaResto.bind(this)
 }

 handlerGantiNamaResto = (name) =>{
  this.setState(() => ({
    namaResto: name, 
  })
  )
 }
 
  render(){
  return (
    <div className="App">
        <h1>Cofe dan {this.state.namaResto} </h1>
        <h2>Menu Makanan</h2>
        <MenuMakanan menuMakanan={"Ayam gorem"} hargaMenu={"50.000.00"}/>
        <h2>Menu Minuman</h2>
        <MenuMinuman menuMinuman={"Juice Anggur"} hargaMenu={"25.000.000"}/> 
        <MenuMinuman menuMinuman={"Juice Pepaya"} hargaMenu={"15.000.000"}/>
        <button onClick={() => this.handlerGantiNamaResto("Programmer")} style={{color:"black", backgroundColor: "gray", margin:"15px 20px", cursor: 'pointer'}}>Ganti Nama Resto</button>
    </div>
  );
}
}

export default App;
