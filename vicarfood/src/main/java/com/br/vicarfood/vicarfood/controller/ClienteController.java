package com.br.vicarfood.vicarfood.controller;

import java.util.List;

import com.br.vicarfood.vicarfood.model.Cliente;
import com.br.vicarfood.vicarfood.repository.ClienteRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    private final ClienteRepository clienteRepository;

    public ClienteController(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @GetMapping("/")
    public List<Cliente> getCliente(){
        return clienteRepository.findAll();
    }

    @PostMapping("/incluirCliente")
    public void gravar(@RequestBody Cliente cliente){
        clienteRepository.save(cliente);
    }

    @GetMapping("/{telefone}")
    public List<Cliente> getClientePorTelefone(@PathVariable("telefone") String telefone){
        var c = clienteRepository.findAll();

        if(c.isPresent()){
            Cliente cliente = c.get();
            clienteRepository;
        }else{
           throw new Exception("Telefone não encontrado"); 
        }

    }
    @PostMapping("/alterarCliente")
    public void alterar(@RequestBody Cliente cliente){
        clienteRepository.save(cliente);
    }




}
