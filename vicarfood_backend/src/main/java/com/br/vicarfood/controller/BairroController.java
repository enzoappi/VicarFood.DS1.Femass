package com.br.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.model.Bairro;
import com.br.vicarfood.repository.BairroRepository;
import com.br.vicarfood.request.BairroRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    
    @CrossOrigin
    @GetMapping("/listar")
    public List<BairroRequest> getBairro(){
        List<Bairro> bairros = bairroRepository.findAll();

        List<BairroRequest> bairroRequests = new ArrayList<BairroRequest>();
            for(Bairro bairro : bairros){
                BairroRequest b = new BairroRequest();
                b.setId(bairro.getId());
                b.setNomeBairro(bairro.getNomeBairro());
                b.setValor(bairro.getValor());
                bairroRequests.add(b);
            }
            return bairroRequests;
        
    }

    @CrossOrigin
    @PostMapping("/incluir")
    public void incluir(@RequestBody BairroRequest bairroRequest) throws Exception{
        Bairro bairro = new Bairro();
        bairro.setNomeBairro(bairroRequest.getNomeBairro());
        bairro.setValor(bairroRequest.getValor());

        bairroRepository.save(bairro);
    }

    @CrossOrigin
    @PostMapping("/alterar")
    public void alterarEndereco(@RequestBody BairroRequest bairroRequest) throws Exception {
        var b = bairroRepository.findById(bairroRequest.getId());
        
        if(b.isPresent()) {
            Bairro bairro = b.get();
            bairro.setNomeBairro(bairroRequest.getNomeBairro());
            bairro.setValor(bairroRequest.getValor());
            bairroRepository.save(bairro);
        } else{
            throw new Exception("Bairro não encontrado");
        } 
    }

    @CrossOrigin
    @PostMapping("/excluir/{id}")
    public void excluirBairro (@PathVariable ("id") Long id) throws Exception{
        try {
            bairroRepository.deleteById(id);
        } catch(Exception e) {
            throw new Exception("Bairro não encontrado");
        }
    }
}

