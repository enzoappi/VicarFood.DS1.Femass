import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from '../Container'
import './BuscaCPF.css'
import { MdKeyboardArrowRight } from "react-icons/md";

export default class BuscaCPF extends Component{
    state = {
        cpfParaBuscar: ""
    }
    
    txtCpfParaBuscar_change = (event) => {
        this.setState({cpfParaBuscar: event.target.value})
    }

    BuscaCPF = () => (
            <Container>
            <div className="boxCPF">
                <h4>Digite seu CPF para validação</h4>
                <input name="CPF" placeholder="CPF" value={this.state.cpfParaBuscar} onChange={this.txtCpfParaBuscar_change} type="text"></input>
            </div>
            <div className="btnContinuar">
            <Link to="/cliente">
                <button className="continuar" /*onClick*/ > Continuar <MdKeyboardArrowRight/> </button>
            </Link>
            </div>       
            </Container>
    )

    render() {
        let pagina = this.BuscaCPF()
        return pagina
    }
}