package com.br.vicarfood.vicarfood.controller;

import java.util.List;

import com.br.vicarfood.vicarfood.model.Cliente;
import com.br.vicarfood.vicarfood.repository.ClienteRepository;

import org.springframework.web.bind.annotation.GetMapping;
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
    public List<Cliente> getClientes() {
        return clienteRepository.findAll(); 
    }

    @PostMapping("/")
    public void gravar(@RequestBody Cliente cliente) {
        clienteRepository.save(cliente);
    }

}
