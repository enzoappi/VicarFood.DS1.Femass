import React, { Component } from 'react'

import Container from '../Container'
import './Cliente.css'
import { MdSave, MdModeEdit } from "react-icons/md";

var cpfProvisorio = '158467984-03'

export default class Cliente extends Component {
    state = {
        cpf: "",
        nomeCliente: "",
        telefone: "",
        cliente: {},
        logradouro: "",
        numero: "",
        complemento: "",
        pontoDeReferencia: "",
        endereco: {},
        nomeBairro: "",
        bairros: [],
        incluindo: false,
        alterando: false
    }

    

    //EDICAO DOS DADOS DE CLIENTE
    txtNome_change = (event) => {
        this.setState({nome: event.target.value})
    }

    txtCpf_change = (event) => {
        this.setState({cpf: event.target.value})
    }

    txtTelefone_change = (event) => {
        this.setState({telefone: event.target.value})
    }
    
    //EDICAO DOS DADOS DE ENDERECO
    txtLogradouro_change = (event) => {
        this.setState({logradouro: event.target.value})
    }

    txtNumero_change = (event) => {
        this.setState({numero: event.target.value})
    }

    txtComplemento_change = (event) => {
        this.setState({complemento: event.target.value})
    }

    txtPontoDeReferencia_change = (event) => {
        this.setState({pontoDeReferencia: event.target.value})
    }

    //EDICAO DOS DADOS DE BAIRRO
    txtNomeBairro_change = (event) => {
        this.setState({nomeBairro: event.target.value})
    }

    //PREENCHIMENTO DOS DADOS DO CLIENTE NO STATE
    preencherCliente = () => {
        //console.log('preenchendo os dados do cliente')
        const url = window.servidor + '/clienteDto/listarClientesPorCpf/' + cpfProvisorio
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({cliente: data}));
    }

    //PREENCHIMENTO DOS DADOS DO ENDERECO NO STATE
    preencherEndereco = () => {
        //console.log('preenchendo os dados do endereco')
        const url = window.servidor + '/clienteDto/listarEnderecoPeloId/' + cpfProvisorio
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({endereco: data}));
    }

    //PREENCHIMENTO DA LISTA DE BAIRROS NO STATE
    preencherBairros = () => {
        //console.log('preenchendo a lista de bairros')
        const url = window.servidor + '/clienteDto/listarBairros'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({bairros: data}));
    }

    componentDidMount() {
        this.preencherCliente()
        this.preencherEndereco()
        this.preencherBairros()
    }

    /*
    iniciarNovo = () => {
        this.setState({incluindo: true, nome: '', cpf: '', telefone: '', logradouro: '', numero: '', nomeBairro: ''})
    }
    */

/*
    iniciarAlterar = (cliente, endereco) => {
        this.setState({alterando: true, nome: cliente.nome, cpf: cliente.cpf, telefone: cliente.telefone, logradouro: endereco.logradouro, numero: endereco.numero, nomeBairro: endereco.nomeBairro})
    }
*/

    iniciarAlterar = () => {
        this.setState({incluindo: true, cpf: '', nome: '', telefone: '', logradouro: '', numero: '', complemento: '', pontoDeReferencia: '', nomeBairro: ''})
    }
    
    /*
    gravarNovoCliente = () => {
        
        const dadosEndereco = {
            "logradouro": this.state.logradouro,
            "numero": this.state.numero,
            "nomeBairro": this.state.nomeBairro
        }
        
        const dadosCliente = {
            "nome": this.state.nome,
            "cpf": this.state.cpf,
            "telefone": this.state.telefone,
            "logradouro": this.state.logradouro,
            "numero": this.state.numero,
            "nomeBairro": this.state.nomeBairro
        }

        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosEndereco)
        };

        let url = window.servidor + '/endereco/incluir'

        fetch(url, requestOptions)

        requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosCliente)
        };

        url = window.servidor + '/cliente/incluir'

        fetch(url, requestOptions)
            .then(fim => {
                this.setState({incluindo: false})
                //this.preencherEndereco()
                this.preencherCliente()
            })
        .catch(erro => console.log(erro));
    }

    gravarAlterar = () => {
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

        const url = window.servidor + '/cliente/alterar'

        fetch(url, requestOptions)
            .then(fim => {
                this.setState({alterando: false})
                this.preencherCliente()
            })
            .catch(erro => console.log(erro));
    }

    excluir = (cliente) => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const url = window.servidor + '/cliente/excluir/' + cliente.cpf

        fetch(url, requestOptions)
            .then(fim => {
                this.preencherCliente()
            })
            .catch(erro => console.log(erro));
    }

    voltar = () => {
        this.setState({incluindo: false, alterando: false})
    }
    */
    
    renderIncluirNovoCliente = () => {
        return (            
            <Container>
                <h1>Identificação - NOVO CLIENTE</h1>
                <div>
                    <h3>Dados Pessoais</h3>
                    <form className="box">
                        <input name="nome" placeholder="Nome Completo" value={this.state.nome} onChange={this.txtNome_change} type="text"></input>
                        <input name="CPF" placeholder="CPF" value={this.state.cpf} onChange={this.txtCpf_change}  type="text"></input>
                        <input name="telefone" placeholder="Telefone" value={this.state.telefone} onChange={this.txtTelefone_change} type="text"></input>

                        <div className="btnSaveEdit">
                        <button className="btnSave" onClick = {() => this.gravarNovo()}> <MdSave className="save"/> </button>
                        <button className="btnEdit" onClick = {() => this.editarNovo()}> <MdModeEdit className="edit"/> </button>
                        </div>
                    </form>
                </div>
                <div>
                    <h3>Endereço</h3>
                    <form className="box">
                        <select name="bairro" placeholder="Bairro" id="bairro" value={this.state.selectedOption} onChange={this.txtNome_change} type="text"></select>
                        <input name="numero" placeholder="Número" value={this.state.numero} onChange={this.txtNumero_change}  type="text"></input>
                        <input name="complemento" placeholder="Complemento" value={this.state.complemento} onChange={this.txtComplemento_change} type="text"></input>
                        <input name="referencia" placeholder="Referência" value={this.state.referencia} onChange={this.txtPontoDeReferencia_change} type="text"></input>
                        
                        <div className="btnSaveEdit">
                        <button className="btnSave" onClick = {() => this.gravarNovo()}> <MdSave className="save"/> </button>
                        <button className="btnEdit" onClick = {() => this.editarNovo()}> <MdModeEdit className="edit"/> </button>
                        </div>
                        
                    </form>
                </div>
                <div>
                    <h3>Modo de Entrega</h3>   
                    
                </div>
                <div>
                    <h3>Modo de Pagamento</h3>   
                    
                </div>
                <div>
                    <h3>Total</h3>   
                    
                </div>
                <button className="finalizar" onClick = {() => this.gravarNovo()}> Finalizar </button>

            </Container>
        );
    }
/*renderAlterarCliente = () => {

}
*/

    renderExibirCliente = () => {
        return (            
            <Container>
                <h1>Identificação - EXIBIR CLIENTE</h1>
                <div>
                    <h3>Dados Pessoais</h3>
                    <form className="box">
                        <input name="nome" placeholder="Nome Completo" value={this.state.cliente.nomeCliente} disabled type="text"></input>
                        <input name="CPF" placeholder="CPF" value={this.state.cliente.cpf} disabled  type="text"></input>
                        <input name="telefone" placeholder="Telefone" value={this.state.cliente.telefone} disabled type="text"></input>

                        <div className="btnSaveEdit">
                        <button className="btnSave" onClick = {() => this.gravarNovo()} disabled> <MdSave className="save"/> </button>
                        <button className="btnEdit" onClick = {() => this.editarNovo()} disabled> <MdModeEdit className="edit"/> </button>
                        </div>
                    </form>
                </div>
                <div>
                    <h3>Endereço</h3>
                    <form className="box">
                        <select name="bairro" placeholder="Bairro" id="bairro" value={this.state.cliente.idBairro} disabled type="text">
                            {this.state.bairros.map((bairro, idx) => (
                                <option key={bairro.idBairro} value={bairro.idBairro} >{bairro.nomeBairro}</option>
                            ))}
                        </select>
                        <input name="numero" placeholder="Número" value={this.state.endereco.numero} disabled  type="text"></input>
                        <input name="complemento" placeholder="Complemento" value={this.state.endereco.complemento} disabled type="text"></input>
                        <input name="referencia" placeholder="Referência" value={this.state.endereco.pontoDeReferencia} disabled type="text"></input>
                        
                        <div className="btnSaveEdit">
                        <button className="btnSave" onClick = {() => this.gravarNovo()} disabled> <MdSave className="save"/> </button>
                        <button className="btnEdit" onClick = {() => this.iniciarAlterar()}> <MdModeEdit className="edit"/> </button>
                        </div>
                        
                    </form>
                </div>
                <div>
                    <h3>Modo de Entrega</h3>   
                    
                </div>
                <div>
                    <h3>Modo de Pagamento</h3>   
                    
                </div>
                <div>
                    <h3>Total</h3>   
                    
                </div>
                <button className="finalizar" onClick = {() => this.gravarNovo()}> Finalizar </button>

            </Container>
        );
    }

    render() {
        let pagina = ''
            if(this.state.incluindo) {
                pagina = this.renderIncluirNovoCliente()
            } else {
                pagina = this.renderExibirCliente()
            }
        return pagina
    }

} 