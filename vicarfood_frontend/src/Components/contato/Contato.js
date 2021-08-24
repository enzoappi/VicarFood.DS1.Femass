import React from 'react'
import './Contato.css'

import Container from '../Container'

import vicar_sgv from "../../assets/images/vicar_sgv.svg"
import styled from 'styled-components';


import { MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Logo = styled.img`
  height: 50vh;
  
`;

const Contato = () => (


    <Container>
        <section>
            <div className="imagem--contato">
                <h1>
                    Contatos
                </h1>

            </div>
        </section>
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
                    <div class="ftco-animate"><a href="https://www.instagram.com/vicarfood/"><FaInstagram className="midia" /></a></div>
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

    </Container>


)


export default Contato