import React from 'react'
//import {  Route } from 'react-router-dom'
import {  Route, Redirect } from 'react-router-dom'

import Cliente from './cliente/Cliente'
import Pedido from './pedido/Pedido'
import Main from './main/Main'
import Costela from './pedido/costela/Costela'
import Batatas from './pedido/batata/Batatas'
import Bebidas from './pedido/bebidas/Bebidas'
import Carrinho from './carrinho/Carrinho'
import Login from './Login/Login'
import Cadastro from './cadastro/Cadastro'
//import { AuthProvider } from '../providers/authorize'
import { isAuthenticated } from './utils/Auth'
import BuscaCPF from './buscaCPF/BuscaCPF'
//import { UserProvider } from './utils/MyContext'


const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
                isAuthenticated() ? (
                        <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: "/Login", state: { from: props.location } }} />
                )
        )} />
);

 //INICIO DO CODIGO ORIGINAL
const Routes = () => (
        <>
                <Route exact path="/" component={Main} />
                <Route exact path="/pedido" component={Pedido} />
                {/*<Route exact path="/cliente" component={Cliente} /> */}
                <Route exact path="/cliente" component={Cliente} />
                <Route exact path="/costela" component={Costela} />
                <Route exact path="/batatas" component={Batatas} />
                <Route exact path="/bebidas" component={Bebidas} />
                <Route exact path="/buscaCPF" component={BuscaCPF}/>
                {/*<Route exact path="/buscaCPF" component={BuscaCPF}/>*/}                
                                
                <Route exact path="/carrinho" component={Carrinho} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Cadastro}/>
        </>
);

export default Routes

//FINAL DO CODIGO ORIGINAL

/*
const Routes = () => (

        <>
        <AuthProvider>
                <Route exact path="/" component={Main} />
                <Route exact path="/pedido" component={Pedido} />
                <Route exact path="/cardapio" component={Cardapio} />
                <Route exact path="/cliente" component={Cliente} />
                <Route exact path="/costela" component={Costela} />
                <Route exact path="/batatas" component={Batatas} />
                <Route exact path="/bebidas" component={Bebidas} />
                <Route exact path="/carrinho" component={Carrinho} />
                <PrivateRoute exact path="/carrinho" component={Carrinho} />
                <Route exact path="/login" component={Login} />
        </AuthProvider>
        </>

);

export default Routes
*/
