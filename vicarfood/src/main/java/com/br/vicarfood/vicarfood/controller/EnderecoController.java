package com.br.vicarfood.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.vicarfood.controller.request.EnderecoRs;
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
    public List<EnderecoRs> getEnderecos() {
        List<Endereco> enderecos = enderecoRepository.findAll();

        List<EnderecoRs> endrs = new ArrayList<EnderecoRs>();
        for(Endereco endereco : enderecos) {
            EnderecoRs e = new EnderecoRs();
            e.setId(endereco.getId());
            e.setLogradouro(endereco.getLogradouro());
            e.setNumero(endereco.getNumero());
            e.setNomeBairro(endereco.getBairro().getNomeBairro());
            endrs.add(e);
        }

        return endrs;
    }

    @PostMapping("/incluir")
    public void incluir(@RequestBody EnderecoRs enderecoRs) throws Exception{
        Endereco endereco = new Endereco();
        endereco.setLogradouro(enderecoRs.getLogradouro());
        endereco.setNumero(enderecoRs.getNumero());

        List <Bairro> bairros = bairroRepository.findAll();

        Bairro bairro = null;
        for(Bairro b : bairros){
            if(b.getNomeBairro().equals(enderecoRs.getNomeBairro())){
                bairro = b;
            }
        }

        if(bairro == null){
            throw new Exception("Bairro não cadastrado");            
        }
        endereco.setBairro(bairro);

        enderecoRepository.save(endereco);
    }

    @GetMapping("/{id}")
    public void excluirEndereco(@PathVariable("id") Long id) throws Exception{
        var e = enderecoRepository.findById(id);

        if(e.isPresent()) {
            Endereco endereco = e.get();
            enderecoRepository.delete(endereco);
        } else {
            throw new Exception("Endereco nao encontrado");
        }
    }

    @PostMapping("/alterar")
    public void alterarEndereco(@RequestBody EnderecoRs enderecoRs){

    }


}
