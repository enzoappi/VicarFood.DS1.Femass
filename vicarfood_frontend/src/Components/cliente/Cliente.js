import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from '../Container'
import './Cliente.css'
import { MdSave, MdModeEdit, MdKeyboardArrowRight } from "react-icons/md";

/////////////////////ARMENGADA PRA TESTAR A FUNCIONALIDADE - ISSO DEVE SAIR DAQUI/////////////////////
var cpfProvisorio = '123654789-00'
//var cpfProvisorio = ''
if (cpfProvisorio === '') {
    cpfProvisorio = null
}
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
        this.setState({ nomeCliente: event.target.value })
    }

    txtCpf_change = (event) => {
        this.setState({ cpf: event.target.value })
    }

    txtTelefone_change = (event) => {
        this.setState({ telefone: event.target.value })
    }

    //EDICAO DOS DADOS DE ENDERECO
    txtLogradouro_change = (event) => {
        this.setState({ logradouro: event.target.value })
    }

    txtNumero_change = (event) => {
        this.setState({ numero: event.target.value })
    }

    txtComplemento_change = (event) => {
        this.setState({ complemento: event.target.value })
    }

    txtPontoDeReferencia_change = (event) => {
        this.setState({ pontoDeReferencia: event.target.value })
    }

    //EDICAO DOS DADOS DE BAIRRO
    txtIdBairro_change = (event) => {
        this.setState({ idBairro: event.target.value })
    }

    ///*
    //PREENCHIMENTO DOS DADOS DO CLIENTE NO STATE
    preencherCliente = async () => {
        const url = window.servidor + '/cliente/listar/' + cpfProvisorio
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ cpf: data.cpf, nomeCliente: data.nomeCliente, telefone: data.telefone, idEndereco: data.idEndereco, logradouro: data.logradouro, numero: data.numero, complemento: data.complemento, pontoDeReferencia: data.pontoDeReferencia, idBairro: data.idBairro, incluindo: data.incluindo });
    };

    //PREENCHIMENTO DA LISTA DE BAIRROS NO STATE (PARA A COMBO)
    carregarBairros = async () => {
        const url = window.servidor + '/bairro/listar'
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ bairros: data });
    }

    /*
        PREENCHIMENTO DA LISTA DE BAIRROS NO STATE (PARA A COMBO)
        carregarBairros = () => {
            const url = window.servidor + '/bairro/listar'
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({bairros: data}));
        }
    */

    componentDidMount() {
        this.carregarBairros()
        this.preencherCliente()
    }

    iniciarAlterar = (event) => {
        event.preventDefault();
        this.setState({ alterando: true })
    }

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
                this.setState({ alterando: false })
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


    renderIncluirNovoCliente = () => {
        return (
            <Container>
                <section>
                    <div className="imagem--cliente">
                        <h1>
                            Aréa do Cliente
                        </h1>

                    </div>
                </section>

                <form>
                    <section>
                        <h3>Dados Pessoais</h3>
                        <div className="box">
                            <input name="nome" placeholder="Nome Completo" value={this.state.nome} onChange={this.txtNome_change} type="text"></input>
                            <input name="CPF" placeholder="CPF" value={this.state.cpf} onChange={this.txtCpf_change} type="text"></input>
                            <input name="telefone" placeholder="Telefone" value={this.state.telefone} onChange={this.txtTelefone_change} type="text"></input>
                        </div>

                    </section>
                    <section>
                        <div>
                            <h3>Endereço</h3>
                            <div className="box">
                                <input name="cep" placeholder="CEP" value={this.state.cep} disabled type="text"></input>

                                {/*<select placeholder="Bairro" value={this.state.idBairro} onChange={this.txtIdBairro_change}>
                            {this.state.bairros.map((bairro) => (<option key={bairro.idBairro} value={bairro.idBairro}>{bairro.nomeBairro}</option>))}
        </select>*/}
                                <input name="bairro" placeholder="Bairro" value={this.state.bairro} disabled type="text"></input>
                                <input name="logradouro" placeholder="Logradouro" value={this.state.logradouro} onChange={this.txtLogradouro_change} type="text"></input>
                                <input name="numero" placeholder="Número" value={this.state.numero} onChange={this.txtNumero_change} type="text"></input>
                                <input name="complemento" placeholder="Complemento" value={this.state.complemento} onChange={this.txtComplemento_change} type="text"></input>
                                <input name="referencia" placeholder="Referência" value={this.state.referencia} onChange={this.txtPontoDeReferencia_change} type="text"></input>

                                <div className="btnSaveEdit">
                                    <button className="btnSave" onClick={this.gravarNovoCliente}> <MdSave className="save" /> </button>
                                    <button className="btnEdit" onClick={() => this.editarNovo()} disabled> <MdModeEdit className="edit" /> </button>
                                </div>

                            </div>
                        </div>
                    </section>
                </form>
                <div className="space">

                </div>

            </Container>
        );
    }


    renderAlterarCliente = () => {
        return (
            <Container>
                <section>
                    <div className="imagem--cliente">
                        <h1>
                            Aréa do Cliente
                        </h1>

                    </div>
                </section>

                <div>
                    <h3>Dados Pessoais</h3>
                    <div className="box">
                        <input name="nome" placeholder="Nome Completo" value={this.state.nomeCliente} onChange={this.txtNome_change} type="text"></input>
                        <input name="CPF" placeholder="CPF" value={this.state.cpf} onChange={this.txtCpf_change} readOnly type="text"></input>
                        <input name="telefone" placeholder="Telefone" value={this.state.telefone} onChange={this.txtTelefone_change} type="text"></input>
                    </div>
                </div>
                <div>
                    <h3>Endereço</h3>
                    <div className="box">
                        <input name="cep" placeholder="CEP" value={this.state.cep} disabled type="text"></input>

                        {/*<select placeholder="Bairro" onChange={this.txtIdBairro_change}>
                            {this.state.bairros.map((bairro) => (
                                <option key={bairro.idBairro} value={bairro.idBairro}>{bairro.nomeBairro}</option>
                            ))}
                        </select>*/}
                        <input name="bairro" placeholder="Bairro" value={this.state.bairro} disabled type="text"></input>
                        <input name="logradouro" placeholder="Logradouro" value={this.state.logradouro} onChange={this.txtLogradouro_change} type="text"></input>
                        <input name="numero" placeholder="Número" value={this.state.numero} onChange={this.txtNumero_change} type="text"></input>
                        <input name="complemento" placeholder="Complemento" value={this.state.complemento} onChange={this.txtComplemento_change} type="text"></input>
                        <input name="referencia" placeholder="Referência" value={this.state.pontoDeReferencia} onChange={this.txtPontoDeReferencia_change} type="text"></input>

                        <div className="btnSaveEdit">
                            <button className="btnSave" data-bs-toggle="tooltip" data-bs-placement="right" title="salvar alterações" onClick={this.gravarAlterar}> <MdSave className="save" /> </button>
                            <button className="btnEdit" onClick={() => this.iniciarAlterar(this.state.cliente, this.state.endereco)} disabled> <MdModeEdit className="edit" /> </button>
                        </div>

                    </div>
                </div>
                <div>
                    <h3>Modo de Entrega</h3>
                    <div className="box">
                        <div className="boxCheckbox">
                            <input type="checkbox" className="checkbox" id="exampleCheck1" />
                            <label for="exampleCheck1">Retirada no local</label>
                        </div>
                        <div className="boxCheckbox">
                            <input type="checkbox" className="checkbox" id="exampleCheck1" />
                            <label for="exampleCheck1">Entrega no endereço cadastrado</label>
                        </div>
                    </div>

                </div>
                <div>
                    <h3>Modo de Pagamento</h3>
                    <div className="box">
                        <div className="boxCheckbox">
                            <input type="checkbox" className="checkbox" id="exampleCheck1" />
                            <label for="exampleCheck1">Cartão de Debito</label>
                        </div>
                        <div className="boxCheckbox">
                            <input type="checkbox" className="checkbox" id="exampleCheck1" />
                            <label for="exampleCheck1">Cartão de Credito</label>
                        </div>
                        <div className="boxCheckbox">
                            <input type="checkbox" className="checkbox" id="exampleCheck1" />
                            <label for="exampleCheck1">Dinheiro</label>
                        </div>
                    </div>

                </div>
                <div>
                    <h3>Total</h3>
                    <div className="totalbox">
                        <div className="boxCheckbox">
                            <label for="exampleCheck1">R$ </label>
                        </div>
                    </div>
                </div>

            </Container>
        );
    }

    renderExibirCliente = () => {
        return (
            <Container>
                <section>
                    <div className="imagem--cliente">
                        <h1>
                            Aréa do Cliente
                        </h1>

                    </div>
                </section>
                <form>
                    <section>

                        <div>
                            <h3>Dados Pessoais</h3>
                            <div className="box">
                                <input name="nome" placeholder="Nome Completo" value={this.state.nomeCliente} disabled type="text"></input>
                                <input name="CPF" placeholder="CPF" value={this.state.cpf} disabled type="text"></input>
                                <input name="telefone" placeholder="Telefone" value={this.state.telefone} disabled type="text"></input>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h3>Endereço</h3>
                            <div className="box">
                                <input name="cep" placeholder="CEP" value={this.state.cep} disabled type="text"></input>
                                {/*<select name="bairro" placeholder="Bairro" id="bairro" value={this.state.idBairro} disabled type="text">
                            {this.state.bairros.map((bairro) => (<option key={bairro.idBairro} value={bairro.idBairro} >{bairro.nomeBairro}</option>))}
        </select>*/}
                                <input name="bairro" placeholder="Bairro" value={this.state.bairro} disabled type="text"></input>
                                <input name="logradouro" placeholder="Logradouro" value={this.state.logradouro} disabled type="text"></input>
                                <input name="numero" placeholder="Número" value={this.state.numero} disabled type="text"></input>
                                <input name="complemento" placeholder="Complemento" value={this.state.complemento} disabled type="text"></input>
                                <input name="referencia" placeholder="Referência" value={this.state.pontoDeReferencia} disabled type="text"></input>

                                <div className="btnSaveEdit">
                                    <button className="btnSave" onClick={() => this.gravarNovo()} disabled> <MdSave className="save" /> </button>
                                    <button className="btnEdit" data-bs-toggle="tooltip" data-bs-placement="right" title="editar" onClick={this.iniciarAlterar}> <MdModeEdit className="edit" /> </button>
                                </div>

                            </div>
                        </div>
                    </section>
                </form>
                <section>
                    <div className="finalizar">
                        <Link to="/pedido">
                            <button className="finalizarCompra" onClick > Cardápio <MdKeyboardArrowRight /> </button>
                        </Link>
                    </div>
                </section>
            </Container>
        );
    }

    render() {
        let pagina = ''
        if (this.state.incluindo) {
            pagina = this.renderIncluirNovoCliente()
        } else {
            if (this.state.alterando) {
                pagina = this.renderAlterarCliente()
            } else {
                pagina = this.renderExibirCliente()
            }
        }
        return pagina
    }
}
