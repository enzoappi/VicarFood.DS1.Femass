import React, { Component } from 'react'

export default class Cliente extends Component {
    state = {
        nome: "",
        cpf: "",
        telefone: ""
    }
    
    txtNome_change = (event) => {
        this.setState({nome: event.target.value})
    }

    txtCpf_change = (event) => {
        this.setState({cpf: event.target.value})
    }

    txtTelefone_change = (event) => {
        this.setState({telefone: event.target.value})
    }

    gravarNovo = () => {
        const dados = {
            "nome": this.state.nome,
            "cpf": this.state.cpf,
            "telefone": this.state.telefone,
            "logradouro":"Rua M",
            "numero": "1",
            "nomeBairro": "Mirante"
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(dados)
        };

        const url = "http://localhost:8080/cliente/incluir"

        fetch(url, requestOptions)
            .then(console.log('Gravado'))
            .catch(erro => console.log(erro));
    }
    
    render() {
        return (
            <div>
                <div className="row mt-5 pt-2">
                    <div className="col-2"></div>
                    <div className="col-8 text-white bg-danger text-center mt-5 pt-2"><h3>Identificação</h3></div>
                    <div className="col-2"></div>
                </div>
                <div className="row mt-4 pt-2">
                    <div className="col-2"></div>
                    <div className="col-8 text-warning bg-dark mt-1 pt-1"><text>Dados Pessoais</text></div>
                    <div className="col-2"></div>
                    <form>
                        <div className="form-group row">
                            <div className="col-2"></div>
                            <label className="col-1 text-center text-white bg-dark">Nome</label>
                            <div className="col-6">
                                <input value={this.state.nome} onChange={this.txtNome_change} className="form-control name-pull-image text-white bg-dark" type="text"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-2"></div>
                            <label className="col-1 text-center text-white bg-dark">CPF</label>
                            <div className="col-6">
                                <input value={this.state.cpf} onChange={this.txtCpf_change} className="form-control name-pull-image text-white bg-dark" type="text"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-2"></div>
                            <label className="col-1 text-center text-white bg-dark">Telefone</label>
                            <div className="col-6">
                                <input value={this.state.telefone} onChange={this.txtTelefone_change} className="form-control name-pull-image text-white bg-dark" type="text"></input>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row mt-2">
                    <div className="col-2"></div>
                    <div className="col-1">
                        <button className="btn btn-primary" onClick = {() => this.gravarNovo()}>Gravar</button>
                    </div>
                </div>
            </div>
        )
    }
}