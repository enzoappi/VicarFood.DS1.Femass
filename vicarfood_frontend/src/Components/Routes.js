import React from 'react'
import {  Route } from 'react-router-dom'

import Cliente from './cliente/Cliente'
import Pedido from './pedido/Pedido'
import Cardapio from './cardapio/Cardapio'
import Main from './main/Main'



const Routes = () => (
    
        <>
        <Route exact path="/" component={Main} />
        <Route exact path="/pedido" component={Pedido} />
        <Route exact path="/cardapio" component={Cardapio} />
        <Route exact path="/cliente" component={Cliente} />
        </>

  
);

export default Routes