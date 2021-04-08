package com.br.vicarfood.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.vicarfood.controller.request.BairroRequest;
import com.br.vicarfood.vicarfood.model.Bairro;
import com.br.vicarfood.vicarfood.repository.BairroRepository;

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
    
    @GetMapping("/")
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

    @GetMapping("/excluir{id}")
    public void excluirBairro (@PathVariable ("id") Long id) throws Exception{
        var b = bairroRepository.findById(id);

        if(b.isPresent()){
            Bairro bairro = b.get();
            bairroRepository.delete(bairro);
        }else{
            throw new Exception("Id não encontrado");
        }
    }

    @PostMapping("/incluir")
    public void incluir(@RequestBody BairroRequest bairroRequest) throws Exception{
        Bairro bairro = new Bairro();
        bairro.setNomeBairro(bairroRequest.getNomeBairro());
        bairro.setValor(bairroRequest.getValor());

        bairroRepository.save(bairro);
    }

    @PostMapping("/alterar")
    public void alterar(@RequestBody BairroRequest bairroRequest){

    }



}

