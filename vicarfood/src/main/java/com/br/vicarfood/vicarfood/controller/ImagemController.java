package com.br.vicarfood.vicarfood.controller;

import java.util.List;

import com.br.vicarfood.vicarfood.model.Imagem;
import com.br.vicarfood.vicarfood.repository.ImagemRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/imagem")
public class ImagemController {
    private final ImagemRepository imagemRepository;

    public ImagemController(ImagemRepository imagemRepository) {
        this.imagemRepository = imagemRepository;
    }

    @GetMapping("/")
    public List<Imagem> getImagens(){
        return imagemRepository.findAll();
        
    }

    @PostMapping("/")
    public void gravarImagem(@RequestBody Imagem imagem){
        imagemRepository.save(imagem);

    }



}
