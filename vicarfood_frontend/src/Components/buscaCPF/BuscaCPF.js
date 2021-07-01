import React from 'react'

import Container from '../Container'
import './BuscaCPF.css'
import { MdKeyboardArrowRight } from "react-icons/md";


const BuscaCPF = () => (
    
       
        <Container>
        <div className="boxCPF">
            <h4>Digite seu CPF para validação</h4>
            <input name="CPF" placeholder="CPF" type="text"></input>
        </div>
        <div className="btnContinuar">
        <button className="continuar" onClick > Continuar <MdKeyboardArrowRight/> </button>
        </div>       
        </Container>
       
    
)


export default BuscaCPF