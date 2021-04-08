package com.br.vicarfood.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.vicarfood.controller.request.EnderecoRequest;
import com.br.vicarfood.vicarfood.model.Bairro;
import com.br.vicarfood.vicarfood.model.Endereco;
import com.br.vicarfood.vicarfood.repository.BairroRepository;
import com.br.vicarfood.vicarfood.repository.EnderecoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {
    private final EnderecoRepository enderecoRepository;
    private final BairroRepository bairroRepository;

    public EnderecoController(EnderecoRepository enderecoRepository, BairroRepository bairroRepository) {
        this.enderecoRepository = enderecoRepository;
        this.bairroRepository = bairroRepository;
    }
    
    @GetMapping("/")
    public List<EnderecoRequest> getEnderecos() {
        List<Endereco> enderecos = enderecoRepository.findAll();

        List<EnderecoRequest> endrs = new ArrayList<EnderecoRequest>();
        for(Endereco endereco : enderecos) {
            EnderecoRequest e = new EnderecoRequest();
            e.setId(endereco.getId());
            e.setLogradouro(endereco.getLogradouro());
            e.setNumero(endereco.getNumero());
            e.setNomeBairro(endereco.getBairro().getNomeBairro());
            endrs.add(e);
        }

        return endrs;
    }

    @PostMapping("/incluir")
    public void incluir(@RequestBody EnderecoRequest enderecoRequest) throws Exception{
        Endereco endereco = new Endereco();
        endereco.setLogradouro(enderecoRequest.getLogradouro());
        endereco.setNumero(enderecoRequest.getNumero());

        List <Bairro> bairros = bairroRepository.findAll();

        Bairro bairro = null;
        for(Bairro b : bairros){
            if(b.getNomeBairro().equals(enderecoRequest.getNomeBairro())){
                bairro = b;
            }
        }

        if(bairro == null){
            throw new Exception("Bairro não cadastrado");            
        }
        endereco.setBairro(bairro);

        enderecoRepository.save(endereco);
    }

    @GetMapping("/excluir{id}")
    public void excluirEndereco(@PathVariable("id") Long id) throws Exception{
        var e = enderecoRepository.findById(id);

        if(e.isPresent()) {
            Endereco endereco = e.get();
            enderecoRepository.delete(endereco);
        } else {
            throw new Exception("Endereco nao encontrado");
        }
    }

    @GetMapping("/alterar{id}")
    public void alterarEndereco(@PathVariable ("id") Long id, @RequestBody EnderecoRequest enderecoRequest) throws Exception {
        var e = enderecoRepository.findById(id);
        
        if(e.isPresent()) {
            Endereco endereco = e.get();
            endereco.setLogradouro(enderecoRequest.getLogradouro());
            endereco.setNumero(enderecoRequest.getNumero());
            enderecoRepository.save(endereco);
        } else{
            throw new Exception("Endereço não encontrado");
        }       

    }


}
