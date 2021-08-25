import React from 'react'
import '../main/Main.css'

import Container from '../Container'

import batata_rosti_jpeg from "../../assets/images/teste2.jpg"
import costela_jpg from "../../assets/images/costela2.jpg"
import costela_bovina_png from "../../assets/images/costela_bovina4.jpg"
import vicar_sgv from "../../assets/images/vicar_sgv.svg"
import styled from 'styled-components';


import { MdPhone, MdLocationOn, MdAccessTime, MdAddBox } from "react-icons/md";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Logo = styled.img`
  height: 50vh;
  
`;

const Main = () => (


        <Container>
                <div className="main">
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
                        <section>
                                <div className="information">
                                        <div className="info">
                                                <div class="icon"><MdPhone /></div>
                                                <div class="text">
                                                        <h5>(22) 9 9999-9999</h5>

                                                </div>
                                                <div class="icon"><MdLocationOn /></div>
                                                <div class="text">
                                                        <h5>Mirante da Lagoa</h5>
                                                </div>
                                                <div class="icon"><MdAccessTime /></div>
                                                <div class="text">
                                                        <h5>Aberto de Sexta a Domingo</h5>
                                                        <p>8:00am - 9:00pm</p>
                                                </div>
                                        </div>
                                        <div class="social-icon">
                                                <div class="ftco-animate"><a href="https://www.facebook.com/vicarfood/"><FaFacebookSquare className="midia" /></a></div>
                                                <div class="ftco-animate"><a href="https://www.instagram.com/vicarfood/"><FaInstagram className="midia"/></a></div>
                                        </div>


                                </div>
                        </section>
                        <section>
                                <div className="main--logo">
                                        <Logo src={vicar_sgv} alt="Logo Vicar" />
                                        <div className="text--logo">
                                                <a>
                                                        Bem-vindo a Vicar Food!
                                                </a>
                                                <p>
                                                        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                                                </p>

                                        </div>
                                </div>

                        </section>
                        <section>
                                <div className="footer">
                                        <p>

                                        </p>

                                </div>
                        </section>
                </div>
        </Container>


)


export default Main