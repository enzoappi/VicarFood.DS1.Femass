package com.br.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.model.Bairro;
import com.br.vicarfood.model.Endereco;
import com.br.vicarfood.repository.BairroRepository;
import com.br.vicarfood.repository.EnderecoRepository;
import com.br.vicarfood.request.EnderecoRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
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
    
    @CrossOrigin
    @GetMapping("/listar")
    public List<EnderecoRequest> getEnderecos() {
        List<Endereco> enderecos = enderecoRepository.findAll();

        List<EnderecoRequest> endrs = new ArrayList<EnderecoRequest>();
        for(Endereco endereco : enderecos) {
            EnderecoRequest e = new EnderecoRequest();
            e.setIdEndereco(endereco.getIdEndereco());
            e.setLogradouro(endereco.getLogradouro());
            e.setNumero(endereco.getNumero());
            e.setComplemento(endereco.getComplemento());
            e.setPontoDeReferencia(endereco.getPontoDeReferencia());
            e.setNomeBairro(endereco.getBairro().getNomeBairro());
            endrs.add(e);
        }

        return endrs;
    }

    @CrossOrigin
    @PostMapping("/incluir")
    public void incluir(@RequestBody EnderecoRequest enderecoRequest) throws Exception{
        Endereco endereco = new Endereco();
        endereco.setLogradouro(enderecoRequest.getLogradouro());
        endereco.setNumero(enderecoRequest.getNumero());
        endereco.setComplemento(enderecoRequest.getComplemento());
        endereco.setPontoDeReferencia(enderecoRequest.getPontoDeReferencia());

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

    @CrossOrigin
    @PostMapping("/alterar")
    public void alterarEndereco(@RequestBody EnderecoRequest enderecoRequest) throws Exception {
        var objeto = enderecoRepository.findById(enderecoRequest.getIdEndereco());
        
        if(objeto.isPresent()) {
            Endereco endereco = objeto.get();
            endereco.setLogradouro(enderecoRequest.getLogradouro());
            endereco.setNumero(enderecoRequest.getNumero());
            endereco.setComplemento(enderecoRequest.getComplemento());
            endereco.setPontoDeReferencia(enderecoRequest.getPontoDeReferencia());
            enderecoRepository.save(endereco);
        } else{
            throw new Exception("Endereço não encontrado!");
        }       

    }

    @CrossOrigin
    @PostMapping("/excluir/{id}")
    public void excluirEndereco(@PathVariable("id") Long id) throws Exception{
        try {
            enderecoRepository.deleteById(id);
        } catch(Exception e) {
            throw new Exception("Endereco nao encontrado!");
        }
        
        /*var e = enderecoRepository.findById(id);

        if(e.isPresent()) {
            Endereco endereco = e.get();
            enderecoRepository.delete(endereco);
        } else {
            throw new Exception("Endereco nao encontrado");
        }*/
    }
}
