import React from 'react'
import {  Route } from 'react-router-dom'

import Cliente from './cliente/Cliente'
import Pedido from './pedido/Pedido'
import Cardapio from './cardapio/Cardapio'
import Main from './main/Main'
import Costela from './pedido/costela/Costela'
import Batatas from './pedido/batata/Batatas'
import Bebidas from './pedido/bebidas/Bebidas'
import Carrinho from './carrinho/Carrinho'
import Login from './Login/Login'


const Routes = () => (
    
        <>
        <Route exact path="/" component={Main} />
        <Route exact path="/pedido" component={Pedido} />
        <Route exact path="/cardapio" component={Cardapio} />
        <Route exact path="/cliente" component={Cliente} />
        <Route exact path="/costela" component={Costela} />
        <Route exact path="/batatas" component={Batatas} />
        <Route exact path="/bebidas" component={Bebidas} />
        <Route exact path="/carrinho" component={Carrinho} />
        <Route exact path="/login" component={Login} />
        </>

  
);

export default Routes