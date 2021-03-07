package com.br.vicarfood.vicarfood.controller;

import java.util.List;

import com.br.vicarfood.vicarfood.model.Endereco;
import com.br.vicarfood.vicarfood.repository.EnderecoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {
    private final EnderecoRepository enderecoRepository;

    public EnderecoController(EnderecoRepository enderecoRepository) {
        this.enderecoRepository = enderecoRepository;
    }

    @GetMapping("/")
    public List<Endereco> getEndereco() {
        return enderecoRepository.findAll();
    }

    @PostMapping("/")
    public void gravar(@RequestBody Endereco endereco) {
        enderecoRepository.save(endereco);
    }

}
