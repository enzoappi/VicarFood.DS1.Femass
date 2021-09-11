package com.br.vicarfood.controller;

import com.br.vicarfood.controller.dto.ClienteDto;
import com.br.vicarfood.model.Cliente;
import com.br.vicarfood.model.Endereco;
import com.br.vicarfood.repository.ClienteRepository;
//import com.br.vicarfood.repository.EnderecoRepository;
import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clienteDto")
public class ClienteControllerDto {
    @Autowired
    private ClienteRepository clienteRepository;


    //####################################
    //REQUISICOES PARA O CLIENTE
    //####################################
///*
    @JsonProperty("incluindo")
    @CrossOrigin
    @GetMapping("/isNovoCliente/{cpf}")
    public Boolean isNovoCliente(@PathVariable("cpf") String cpf){
        
        Boolean resultado = false;
        var objeto = clienteRepository.findById(cpf);
        if(objeto.isPresent()) {
            resultado = false;
        } else {
            resultado = true;
        }

        return resultado;
    }   
//*/

///*

    @CrossOrigin
    @PostMapping("/incluir") 
    public void incluirClienteDto(@RequestBody ClienteDto clienteDto) throws Exception{
        Cliente cliente = new Cliente();
        cliente.setNomeCliente(clienteDto.getNomeCliente());
        cliente.setCpf(clienteDto.getCpf());
        cliente.setTelefone(clienteDto.getTelefone());

        Endereco endereco = new Endereco();
        endereco.setLogradouro(clienteDto.getLogradouro());
        endereco.setBairro(clienteDto.getBairro());
        endereco.setCidade(clienteDto.getCidade());
        endereco.setCep(clienteDto.getCep());
        endereco.setNumero(clienteDto.getNumero());
        endereco.setComplemento(clienteDto.getComplemento());
        endereco.setPontoDeReferencia(clienteDto.getPontoDeReferencia());

        
        cliente.setEndereco(endereco);

        clienteRepository.save(cliente);
    }

//*/  
}
