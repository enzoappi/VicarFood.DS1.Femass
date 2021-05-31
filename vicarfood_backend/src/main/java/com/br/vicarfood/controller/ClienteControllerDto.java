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
        //List<Cliente> clientes = clienteRepository.findAll();
        var objeto = clienteRepository.findById(cpf);
        if(objeto.isPresent()) {
            resultado = false;
        } else {
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
            resultado = true;
        }
        return resultado;
    }
*/

/*
    @CrossOrigin
    @GetMapping("/listarClientes")
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }
*/

/*
    @CrossOrigin
    @GetMapping("/listarClientesPorCpf/{cpf}")
    //@ResponseBody
    public ClienteDto getClienteEnderecoBairroPorCpf(@PathVariable("cpf") String cpf) throws Exception{
        List<Cliente> clientes = clienteRepository.findAll();
        
        ClienteDto clienteDto = new ClienteDto();
        
        try{
            for(Cliente c : clientes) {
                if(c.getCpf().equals(cpf)) {
                    clienteDto.setCpf(c.getCpf());
                    clienteDto.setNomeCliente(c.getNomeCliente());
                    clienteDto.setTelefone(c.getTelefone());
                    clienteDto.setIdEndereco(c.getEndereco().getIdEndereco());
                }
            }
            return clienteDto;
        } catch(Exception exc) {
            throw new Exception("Cliente não encontrado");
        }
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

        if(endereco.isPresent() && objeto.isPresent()) {
            Cliente c = objeto.get();
            c.setCpf(clienteDto.getCpf());
            c.setNomeCliente(clienteDto.getNomeCliente());
            c.setTelefone(clienteDto.getTelefone());
            c.setEndereco(endereco.get());
            clienteRepository.save(c);
        } else {
            throw new Exception("Não eh possivel realizar a edicao");
        }
    }
*/    
}
