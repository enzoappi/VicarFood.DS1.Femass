package com.br.vicarfood.vicarfood.controller;

import java.util.List;

import com.br.vicarfood.vicarfood.model.Bairro;
import com.br.vicarfood.vicarfood.repository.BairroRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bairro")
public class BairroController {
    private final BairroRepository bairroRepository;

    public BairroController(BairroRepository bairroRepository) {
        this.bairroRepository = bairroRepository;
    }

    @GetMapping("/")
    public List<Bairro> getBairro() {
        return bairroRepository.findAll();
    }

    @PostMapping("/")
    public void gravar(@RequestBody Bairro bairro) {
        bairroRepository.save(bairro);
    }
}
