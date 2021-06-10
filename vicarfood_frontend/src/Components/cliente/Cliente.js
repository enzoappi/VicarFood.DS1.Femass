import React, { Component } from 'react'

import Container from '../Container'
import './Cliente.css'
import { MdSave, MdModeEdit } from "react-icons/md";

/////////////////////ARMENGADA PRA TESTAR A FUNCIONALIDADE - ISSO DEVE SAIR DAQUI/////////////////////
<<<<<<< HEAD
var cpfProvisorio = '123654789-00'
//var cpfProvisorio = ''
=======
//var cpfProvisorio = '123654789-00'
var cpfProvisorio = ''
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741
if (cpfProvisorio === ''){
    cpfProvisorio = null
}
//TESTE
/////////////////////////////////////////////////////////////////////////////////////////////////////////

export default class Cliente extends Component {
    state = {
        cpf: "",
        nomeCliente: "",
        telefone: "",
        idEndereco: "",
        logradouro: "",
        numero: "",
        complemento: "",
        pontoDeReferencia: "",
        idBairro: "",
        bairros: [],
        incluindo: false,
        alterando: false,
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

///*
    //PREENCHIMENTO DOS DADOS DO CLIENTE NO STATE
<<<<<<< HEAD
    preencherCliente = async () => {
        const url = window.servidor + '/cliente/listar/' + cpfProvisorio
        const response = await fetch(url);
        const data = await response.json();
        if(data.idBairro === null) {
            this.setState({cpf: data.cpf, nomeCliente: data.nomeCliente, telefone: data.telefone, idEndereco: data.idEndereco, logradouro: data.logradouro, numero: data.numero, complemento: data.complemento, pontoDeReferencia: data.pontoDeReferencia, idBairro: '', incluindo: data.incluindo});
        } else {
            this.setState({cpf: data.cpf, nomeCliente: data.nomeCliente, telefone: data.telefone, idEndereco: data.idEndereco, logradouro: data.logradouro, numero: data.numero, complemento: data.complemento, pontoDeReferencia: data.pontoDeReferencia, idBairro: data.idBairro, incluindo: data.incluindo});
        };
    };

    //PREENCHIMENTO DA LISTA DE BAIRROS NO STATE (PARA A COMBO)
    carregarBairros = async () => {
        const url = window.servidor + '/bairro/listar'
        const response = await fetch(url);
        const data = await response.json();
        this.setState({bairros: data});
=======
    preencherCliente = () => {
        //const url = window.servidor + '/clienteDto/listarClientesPorCpf/' + cpfProvisorio
        const url = window.servidor + '/cliente/listar/' + cpfProvisorio
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({cpf: data.cpf, nomeCliente: data.nomeCliente, telefone: data.telefone, idEndereco: data.idEndereco}));
    }

    //PREENCHIMENTO DOS DADOS DO ENDERECO NO STATE
    preencherEndereco = () => {
        //const url = window.servidor + '/clienteDto/listarEnderecoPeloId/' + cpfProvisorio
        const url = window.servidor + '/endereco/listar/' + cpfProvisorio
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({logradouro: data.logradouro, numero: data.numero, complemento: data.complemento, pontoDeReferencia: data.pontoDeReferencia, idBairro: data.idBairro}));
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741
    }

/*
    //PREENCHIMENTO DA LISTA DE BAIRROS NO STATE (PARA A COMBO)
    carregarBairros = () => {
<<<<<<< HEAD
=======
        //const url = window.servidor + '/clienteDto/listarBairros'
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741
        const url = window.servidor + '/bairro/listar'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({bairros: data}));
    }
*/

///*
    componentDidMount() {
<<<<<<< HEAD
        this.carregarBairros()
        this.preencherCliente()
=======
        //console.log(this.state.incluindo)
        if(!this.state.incluindo) {
            this.preencherCliente()
            this.preencherEndereco()
        }
    }

/*
    iniciarNovo = (event) => {
        event.preventDefault();
        this.setState({incluindo: true, cpf: '', nomeCliente: '', telefone: '', idEndereco: '',logradouro: '', numero: '', complemento: '', pontoDeReferencia: '', idBairro: ''})
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741
    }
//*/

    iniciarAlterar = (event) => {
        event.preventDefault();
<<<<<<< HEAD
=======
        //var cliente = this.state.cliente;
        //var endereco = this.state.endereco;
        //this.setState({alterando: true, cpf: cliente.cpf, nomeCliente: cliente.nomeCliente, telefone: cliente.telefone, idEndereco: cliente.idEndereco,logradouro: endereco.logradouro, numero: endereco.numero, complemento: endereco.complemento, pontoDeReferencia: endereco.pontoDeReferencia, idBairro: endereco.idBairro})
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741
        this.setState({alterando: true})
    }
    
///*
    gravarNovoCliente = (event) => {
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

//        console.log(dadosCliente)

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(dadosCliente)
        };

        const url = window.servidor + '/clienteDto/incluir'

        fetch(url, requestOptions)
            .then(fim => {
                event.preventDefault()
                cpfProvisorio = this.state.cpf //adicionei
                this.preencherCliente()
            })
            .catch(erro => console.log(erro));

    }
//*/

    gravarAlterar = (event) => {

        const dadosEndereco = {
            "idEndereco": this.state.idEndereco,
            "logradouro": this.state.logradouro,
            "numero": this.state.numero,
            "complemento": this.state.complemento,
            "pontoDeReferencia": this.state.pontoDeReferencia,
            "idBairro": this.state.idBairro
        }

//        console.log(dadosEndereco)

        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(dadosEndereco)
        };

        let url = window.servidor + '/endereco/alterar'

        fetch(url, requestOptions)

        const dadosCliente = {
            "cpf": this.state.cpf,
            "nomeCliente": this.state.nomeCliente,
            "telefone": this.state.telefone,
            "idEndereco": this.state.idEndereco
        }

//        console.log(dadosCliente)

        requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(dadosCliente)
        };

        url = window.servidor + '/cliente/alterar'

        fetch(url, requestOptions)
            .then(fim => {
                event.preventDefault()
                this.setState({alterando: false})
                this.preencherCliente()
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
                        <select placeholder="Bairro" value={this.state.idBairro} onChange={this.txtIdBairro_change}>
                            {this.state.bairros.map((bairro) => (<option key={bairro.idBairro} value={bairro.idBairro}>{bairro.nomeBairro}</option>))}
                        </select>
                        <input name="logradouro" placeholder="Logradouro" value={this.state.logradouro} onChange={this.txtLogradouro_change}  type="text"></input>
                        <input name="numero" placeholder="Número" value={this.state.numero} onChange={this.txtNumero_change}  type="text"></input>
                        <input name="complemento" placeholder="Complemento" value={this.state.complemento} onChange={this.txtComplemento_change} type="text"></input>
                        <input name="referencia" placeholder="Referência" value={this.state.referencia} onChange={this.txtPontoDeReferencia_change} type="text"></input>
                        
                        <div className="btnSaveEdit">
                        <button className="btnSave" onClick = {this.gravarNovoCliente}> <MdSave className="save"/> </button>
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
                        <button className="btnSave" data-bs-toggle="tooltip" data-bs-placement="right" title="salvar alterações" onClick = {this.gravarAlterar}> <MdSave className="save"/> </button>
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
                        <input name="nome" placeholder="Nome Completo" value={this.state.nomeCliente} disabled type="text"></input>
                        <input name="CPF" placeholder="CPF" value={this.state.cpf} disabled  type="text"></input>
                        <input name="telefone" placeholder="Telefone" value={this.state.telefone} disabled type="text"></input>
                    </div>
                </div>
                <div>
                    <h3>Endereço</h3>
                    <div className="box">
                        <select name="bairro" placeholder="Bairro" id="bairro" value={this.state.idBairro} disabled type="text">
                            {this.state.bairros.map((bairro) => (<option key={bairro.idBairro} value={bairro.idBairro} >{bairro.nomeBairro}</option>))}
                        </select>
                        <input name="logradouro" placeholder="Logradouro" value={this.state.logradouro} disabled  type="text"></input>
                        <input name="numero" placeholder="Número" value={this.state.numero} disabled  type="text"></input>
                        <input name="complemento" placeholder="Complemento" value={this.state.complemento} disabled type="text"></input>
                        <input name="referencia" placeholder="Referência" value={this.state.pontoDeReferencia} disabled type="text"></input>
                        
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