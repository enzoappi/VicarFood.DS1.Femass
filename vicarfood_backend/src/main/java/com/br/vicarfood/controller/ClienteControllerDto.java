package com.br.vicarfood.controller;

import com.br.vicarfood.controller.dto.ClienteDto;
import com.br.vicarfood.model.Bairro;
import com.br.vicarfood.model.Cliente;
import com.br.vicarfood.model.Endereco;
import com.br.vicarfood.repository.BairroRepository;
import com.br.vicarfood.repository.ClienteRepository;
import com.br.vicarfood.repository.EnderecoRepository;
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

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private BairroRepository bairroRepository;


    //####################################
    //REQUISICOES PARA O CLIENTE
    //####################################
///*
    @JsonProperty("incluindo")
    @CrossOrigin
    @GetMapping("/isNovoCliente/{cpf}")
    public Boolean isNovoCliente(@PathVariable("cpf") String cpf){
        
        Boolean resultado = false;
<<<<<<< HEAD
=======
        //List<Cliente> clientes = clienteRepository.findAll();
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741
        var objeto = clienteRepository.findById(cpf);
        if(objeto.isPresent()) {
            resultado = false;
        } else {
<<<<<<< HEAD
=======
            resultado = true;
        }

        return resultado;
    }   
///*

/*
        for(Cliente c : clientes) {
            if(c.getCpf().equals(cpf)) {
                resultado = false;
            }
        }
*/

/*
        if(!objeto.isPresent()) {
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741
            resultado = true;
        }

        return resultado;
<<<<<<< HEAD
    }   
//*/

///*
=======
    }
*/

/*
    @CrossOrigin
    @GetMapping("/listarClientes")
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }
*/
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741

/*
    @CrossOrigin
    @PostMapping("/incluir") 
    public void incluirClienteDto(@RequestBody ClienteDto clienteDto) throws Exception{
        Cliente cliente = new Cliente();
        cliente.setNomeCliente(clienteDto.getNomeCliente());
        cliente.setCpf(clienteDto.getCpf());
        cliente.setTelefone(clienteDto.getTelefone());

        Endereco endereco = new Endereco();
        endereco.setLogradouro(clienteDto.getLogradouro());
        endereco.setNumero(clienteDto.getNumero());
        endereco.setComplemento(clienteDto.getComplemento());
        endereco.setPontoDeReferencia(clienteDto.getPontoDeReferencia());

        var objeto = bairroRepository.findById(clienteDto.getIdBairro());
        if(objeto.isPresent()) {
            Bairro bairro = objeto.get();
            endereco.setBairro(bairro);
            enderecoRepository.save(endereco);
        } else {
            throw new Exception("Endereco não encontrado!");
        }
<<<<<<< HEAD

        cliente.setEndereco(endereco);
=======
    }
*/

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
        endereco.setNumero(clienteDto.getNumero());
        endereco.setComplemento(clienteDto.getComplemento());
        endereco.setPontoDeReferencia(clienteDto.getPontoDeReferencia());

        var objeto = bairroRepository.findById(clienteDto.getIdBairro());
        if(objeto.isPresent()) {
            Bairro bairro = objeto.get();
            endereco.setBairro(bairro);
            enderecoRepository.save(endereco);
        } else {
            throw new Exception("Endereco não encontrado!");
        }

        cliente.setEndereco(endereco);

        clienteRepository.save(cliente);
    }

//*/

/*
    @CrossOrigin
    @PostMapping("/alterarCliente")
    public void alterarEndereco(@RequestBody ClienteDto clienteDto) throws Exception {
        var objeto = clienteRepository.findById(clienteDto.getCpf());
        var endereco = enderecoRepository.findById(clienteDto.getIdEndereco());
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741

        clienteRepository.save(cliente);
    }
<<<<<<< HEAD

//*/  
=======
*/    
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741
}
