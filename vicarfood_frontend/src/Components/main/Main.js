import React from 'react'
import '../main/Main.css'

import Container from '../Container'
import batata_rosti_jpeg from "../../assets/images/teste2.jpg"
import costela_jpg from "../../assets/images/costela2.jpg"
import costela_bovina_png from "../../assets/images/costela_bovina4.jpg"

const Main = () => (
    
       
        <Container>
        <h1>Main</h1>
        <div className="carrosel">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner ">
                                <div className="carousel-item active">
                                        <img src={batata_rosti_jpeg} class="d-block w-100 " alt="..." />
                                </div>
                                <div className="carousel-item">
                                        <img src={costela_jpg} class="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                        <img src={costela_bovina_png} class="d-block w-100" alt="..." />
                                </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                        </button>
                </div>
        </div>
        </Container>
       
    
)


export default Main