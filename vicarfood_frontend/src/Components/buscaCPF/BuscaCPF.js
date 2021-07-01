import React from 'react'

import Container from '../Container'
import './BuscaCPF.css'
import {  MdSearch} from "react-icons/md";


const BuscaCPF = () => (
    
       
        <Container>
        <div className="boxCPF">
            <h4>Digite seu CPF para validação</h4>
            <input name="CPF" placeholder="CPF" type="text"></input>
            <button className="search" onClick > <MdSearch/> </button>
        </div>
            
        </Container>
       
    
)


export default BuscaCPF