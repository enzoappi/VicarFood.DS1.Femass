import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import Header from '../header/Header'
import './Pedido.css'

import batata_rosti_jpeg from "../../assets/images/teste2.jpg"
import costela_jpg from "../../assets/images/costela2.jpg"
import drink from "../../assets/images/drink-4.jpg"

const Pedido = () => (

    <Container>
        <Header />
        <section>
            <div className="imagem">
                <h1>
                    Nosso Cardápio
                </h1>

            </div>
        </section>
        <section>
            <div className="menu">
                <div >
                    <Link className="app-menu_link" to="/batata">
                    <img className="menu--batata" src={batata_rosti_jpeg}/>
                    </Link>
                    <a>Batata Rosti</a>
                </div>
                <div >
                    <Link className="app-menu_link" to="/costela">
                    <img className="menu--costela" src={costela_jpg}  />
                    </Link>
                    <a>Costela</a>
                </div>
                <div >
                    <Link className="app-menu_link" to="/bebidas">
                    <img className="menu--bebida" src={drink} />
                    </Link>
                    <a>Bebidas</a>
                </div>
            </div>
        </section>


    </Container>
)


export default Pedido

