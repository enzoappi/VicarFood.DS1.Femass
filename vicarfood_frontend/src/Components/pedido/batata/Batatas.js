import React from 'react'
import Container from '../../Container'
import './Batatas.css'

import { MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';


const Batatas = () => (
    
       
        <Container>
        <div className="title">
        <span>
        <Link className="arrow" to="/pedido">
        <MdArrowBack />
        </Link>
        </span>
        <h2>Batatas</h2>                        
        </div>
        
        
        </Container>
       
    
)


export default Batatas