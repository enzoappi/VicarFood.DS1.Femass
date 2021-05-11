import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Container from './Components/Container'
import Footer from './Components/footer'
import Header from './Components/header'
import Routes from './Components/Routes';

const App = () => (   
  <BrowserRouter>
      <Header />
      <Container>
        <Routes/>
      </Container>
      <Footer />
  </BrowserRouter>
)

export default App







/*import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Cabecalho from "./Components/Cabecalho";
import Rodape from "./Components/rodape/Rodape";
import { GlobalStyle } from "./Components/GlobalStyle";
import Cliente from './Components/cliente/Cliente';

/*import Menu from "./Components/menu/Menu"
import Home from "./Components/home/Home"
import Rodape from './Components/rodape/Rodape'
import Pedido from './Components/pedido/Pedido'
import Cardapio from './Components/cardapio/Cardapio'



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle /> 
        <Cabecalho />
    
        <Rodape />
      </BrowserRouter>
      
    )
  }
}*/

