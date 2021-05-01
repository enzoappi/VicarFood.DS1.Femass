import React, { Component } from 'react'
import Menu from "./menu/Menu"
import Home from "./home/Home"
import Rodape from './rodape/Rodape'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pedido from './pedido/Pedido'
import Cardapio from './cardapio/Cardapio'
import Cliente from './cliente/Cliente'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pedido">
              <Pedido />
            </Route>
            <Route path="/cardapio">
              <Cardapio />
            </Route>
            <Route path="/cliente">
              <Cliente />
            </Route>
          </Switch>
          <Rodape />
        </div>
      </BrowserRouter>
    )
  }
}

