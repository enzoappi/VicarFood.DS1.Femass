import React, { Component } from 'react'

import Container from '../Container'
import './Cliente.css'
import { MdSave, MdModeEdit } from "react-icons/md";

/////////////////////ARMENGADA PRA TESTAR A FUNCIONALIDADE - ISSO DEVE SAIR DAQUI/////////////////////
//var cpfProvisorio = '158467984-03'
var cpfProvisorio = '136457895-00'
if (cpfProvisorio === ''){
    cpfProvisorio = null
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

export default class Cliente extends Component {
    state = {
        cpf: "",
        nomeCliente: "",
        telefone: "",
        cliente: {},
        idEndereco: "",
        logradouro: "",
        numero: "",
        complemento: "",
        pontoDeReferencia: "",
        endereco: {},
        idBairro: "",
        bairros: [],
        incluindo: false,
        alterando: false
    }

    

    //EDICAO DOS DADOS DE CLIENTE
    txtNome_change = (event) => {
        this.setState({nomeCliente: event.target.value})
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
    txtIdBairro_change = (event) => {
        this.setState({idBairro: event.target.value})
    }

    //TESTANDO A EXISTENCIA DO CLIENTE NO BANCO
    isNovoCliente = () => {
        const url = window.servidor + '/clienteDto/isNovoCliente/' + cpfProvisorio
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({incluindo: data}));
    }

    //PREENCHIMENTO DOS DADOS DO CLIENTE NO STATE
    preencherCliente = () => {
        const url = window.servidor + '/clienteDto/listarClientesPorCpf/' + cpfProvisorio
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({cliente: data}));
    }

    //PREENCHIMENTO DOS DADOS DO ENDERECO NO STATE
    preencherEndereco = () => {
        const url = window.servidor + '/clienteDto/listarEnderecoPeloId/' + cpfProvisorio
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({endereco: data}));
    }

    //PREENCHIMENTO DA LISTA DE BAIRROS NO STATE
    carregarBairros = () => {
        const url = window.servidor + '/clienteDto/listarBairros'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({bairros: data}));
    }

    UNSAFE_componentWillMount() {
        this.isNovoCliente()
        this.carregarBairros()
    }

    componentDidMount() {
        
        if(!this.state.incluindo) {
            this.preencherCliente()
            this.preencherEndereco()
        }
        
        //this.preencherCliente()
        //this.preencherEndereco()
        //this.carregarBairrosBairros()
    }

/*
    iniciarNovo = (event) => {
        event.preventDefault();
        this.setState({incluindo: true, cpf: '', nomeCliente: '', telefone: '', idEndereco: '',logradouro: '', numero: '', complemento: '', pontoDeReferencia: '', idBairro: ''})
    }
*/

    iniciarAlterar = (event) => {
        event.preventDefault();
        var cliente = this.state.cliente;
        var endereco = this.state.endereco;
        this.setState({alterando: true, cpf: cliente.cpf, nomeCliente: cliente.nomeCliente, telefone: cliente.telefone, idEndereco: cliente.idEndereco,logradouro: endereco.logradouro, numero: endereco.numero, complemento: endereco.complemento, pontoDeReferencia: endereco.pontoDeReferencia, idBairro: endereco.idBairro})
    }
    
///*
    gravarNovoCliente = () => {
        const dadosCliente = {
            "cpf": this.state.cpf,
            "nomeCliente": this.state.nomeCliente,
            "telefone": this.state.telefone,
            "logradouro": this.state.logradouro,
            "numero": this.state.numero,
            "complemento": this.state.complemento,
            "pontoDeReferencia": this.state.pontoDeReferencia,
            "idBairro": this.state.idBairro
        }

        console.log(dadosCliente)

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(dadosCliente)
        };

        const url = window.servidor + '/cliente/incluir'

        fetch(url, requestOptions)
            .then(fim => {
                this.setState({incluindo: false})
                this.preencherCliente()
                this.preencherEndereco()
            })
            .catch(erro => console.log(erro));

    }
//*/

    gravarAlterar = () => {

        const dadosEndereco = {
            "idEndereco": this.state.idEndereco,
            "logradouro": this.state.logradouro,
            "numero": this.state.numero,
            "complemento": this.state.complemento,
            "pontoDeReferencia": this.state.pontoDeReferencia,
            "idBairro": this.state.idBairro
        }

        console.log(dadosEndereco)

        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(dadosEndereco)
        };

        let url = window.servidor + '/clienteDto/alterarEndereco'

        fetch(url, requestOptions)

        const dadosCliente = {
            "cpf": this.state.cpf,
            "nomeCliente": this.state.nomeCliente,
            "telefone": this.state.telefone,
            "idEndereco": this.state.idEndereco
        }

        console.log(dadosCliente)

        requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(dadosCliente)
        };

        url = window.servidor + '/clienteDto/alterarCliente'

        fetch(url, requestOptions)
            .then(fim => {
                this.setState({alterando: false})
                this.preencherCliente()
                this.preencherEndereco()
            })
            .catch(erro => console.log(erro));

    }

/*
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

///*    
    renderIncluirNovoCliente = () => {
        return (            
            <Container>
                <h1>Identificação - NOVO CLIENTE</h1>
                <div>
                    <h3>Dados Pessoais</h3>
                    <div className="box">
                        <input name="nome" placeholder="Nome Completo" value={this.state.nome} onChange={this.txtNome_change} type="text"></input>
                        <input name="CPF" placeholder="CPF" value={this.state.cpf} onChange={this.txtCpf_change}  type="text"></input>
                        <input name="telefone" placeholder="Telefone" value={this.state.telefone} onChange={this.txtTelefone_change} type="text"></input>
                    </div>
                </div>
                <div>
                    <h3>Endereço</h3>
                    <div className="box">
                        <select placeholder="Bairro" onChange={this.txtIdBairro_change} >
                            {this.state.bairros.map((bairro) => (
                                <option key={bairro.idBairro} value={bairro.idBairro}>{bairro.nomeBairro}</option>
                            ))}
                        </select>
                        <input name="logradouro" placeholder="Logradouro" value={this.state.logradouro} onChange={this.txtLogradouro_change}  type="text"></input>
                        <input name="numero" placeholder="Número" value={this.state.numero} onChange={this.txtNumero_change}  type="text"></input>
                        <input name="complemento" placeholder="Complemento" value={this.state.complemento} onChange={this.txtComplemento_change} type="text"></input>
                        <input name="referencia" placeholder="Referência" value={this.state.referencia} onChange={this.txtPontoDeReferencia_change} type="text"></input>
                        
                        <div className="btnSaveEdit">
                        <button className="btnSave" onClick = {() => this.gravarNovoCliente()}> <MdSave className="save"/> </button>
                        <button className="btnEdit" onClick = {() => this.editarNovo()} disabled> <MdModeEdit className="edit"/> </button>
                        </div>
                        
                    </div>
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
//*/

    renderAlterarCliente = () => {
        return (            
            <Container>
                <h1>Identificação - ALTERAR CLIENTE</h1>
                <div>
                    <h3>Dados Pessoais</h3>
                    <div className="box">
                        <input name="nome" placeholder="Nome Completo" value={this.state.nomeCliente} onChange={this.txtNome_change} type="text"></input>
                        <input name="CPF" placeholder="CPF" value={this.state.cpf} onChange={this.txtCpf_change}  readOnly type="text"></input>
                        <input name="telefone" placeholder="Telefone" value={this.state.telefone} onChange={this.txtTelefone_change} type="text"></input>
                    </div>
                </div>
                <div>
                    <h3>Endereço</h3>
                    <div className="box">
                        <select placeholder="Bairro" onChange={this.txtIdBairro_change}>
                            {this.state.bairros.map((bairro) => (
                                <option key={bairro.idBairro} value={bairro.idBairro}>{bairro.nomeBairro}</option>
                            ))}
                        </select>
                        <input name="logradouro" placeholder="Logradouro" value={this.state.logradouro} onChange={this.txtLogradouro_change}  type="text"></input>
                        <input name="numero" placeholder="Número" value={this.state.numero} onChange={this.txtNumero_change}  type="text"></input>
                        <input name="complemento" placeholder="Complemento" value={this.state.complemento} onChange={this.txtComplemento_change} type="text"></input>
                        <input name="referencia" placeholder="Referência" value={this.state.pontoDeReferencia} onChange={this.txtPontoDeReferencia_change} type="text"></input>
                        
                        <div className="btnSaveEdit">
                        <button className="btnSave" data-bs-toggle="tooltip" data-bs-placement="right" title="salvar alterações" onClick = {() => this.gravarAlterar()}> <MdSave className="save"/> </button>
                        <button className="btnEdit" onClick = {() => this.iniciarAlterar(this.state.cliente, this.state.endereco)} disabled> <MdModeEdit className="edit"/> </button>
                        </div>
                        
                    </div>
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

    renderExibirCliente = () => {
        return (            
            <Container>
                <h1>Identificação - EXIBIR CLIENTE</h1>
                <div>
                    <h3>Dados Pessoais</h3>
                    <div className="box">
                        <input name="nome" placeholder="Nome Completo" value={this.state.cliente.nomeCliente} disabled type="text"></input>
                        <input name="CPF" placeholder="CPF" value={this.state.cliente.cpf} disabled  type="text"></input>
                        <input name="telefone" placeholder="Telefone" value={this.state.cliente.telefone} disabled type="text"></input>
                    </div>
                </div>
                <div>
                    <h3>Endereço</h3>
                    <div className="box">
                        <select name="bairro" placeholder="Bairro" id="bairro" value={this.state.endereco.idBairro} disabled type="text">
                            {this.state.bairros.map((bairro) => (
                                <option key={bairro.idBairro} value={bairro.idBairro} >{bairro.nomeBairro}</option>
                            ))}
                        </select>
                        <input name="logradouro" placeholder="Logradouro" value={this.state.endereco.logradouro} disabled  type="text"></input>
                        <input name="numero" placeholder="Número" value={this.state.endereco.numero} disabled  type="text"></input>
                        <input name="complemento" placeholder="Complemento" value={this.state.endereco.complemento} disabled type="text"></input>
                        <input name="referencia" placeholder="Referência" value={this.state.endereco.pontoDeReferencia} disabled type="text"></input>
                        
                        <div className="btnSaveEdit">
                        <button className="btnSave" onClick = {() => this.gravarNovo()} disabled> <MdSave className="save"/> </button>
                        <button className="btnEdit" data-bs-toggle="tooltip" data-bs-placement="right" title="editar" onClick = {this.iniciarAlterar}> <MdModeEdit className="edit"/> </button>
                        </div>
                        
                    </div>
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
            if(this.state.alterando) {
                pagina = this.renderAlterarCliente()
            } else {
                pagina = this.renderExibirCliente()
            }
        }
        return pagina
    }

} 