package com.br.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.model.Bairro;
import com.br.vicarfood.model.Cliente;
import com.br.vicarfood.model.Endereco;
import com.br.vicarfood.repository.BairroRepository;
import com.br.vicarfood.repository.ClienteRepository;
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
    private final ClienteRepository clienteRepository;
    private final EnderecoRepository enderecoRepository;
    private final BairroRepository bairroRepository;

    public EnderecoController(ClienteRepository clienteRepository, EnderecoRepository enderecoRepository, BairroRepository bairroRepository) {
        this.clienteRepository = clienteRepository;
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
            e.setIdBairro(endereco.getBairro().getIdBairro());
            endrs.add(e);
        }

        return endrs;
    }

    @CrossOrigin
    @GetMapping("/listar/{cpfDoCliente}")
    public EnderecoRequest getEnderecoPeloCpfDoCliente(@PathVariable("cpfDoCliente") String cpfDoCliente) throws Exception{
        var objeto1 = clienteRepository.findById(cpfDoCliente);
        Long idEndereco;

        if(objeto1.isPresent()) {
            Cliente cliente = objeto1.get();
            idEndereco = cliente.getEndereco().getIdEndereco();
        } else {
            throw new Exception("Cliente não encontrado!");
        }
        
        var objeto2 = enderecoRepository.findById(idEndereco);
        
        EnderecoRequest endReq = new EnderecoRequest();
        
        if(objeto2.isPresent()) {
            Endereco endereco = objeto2.get();
            endReq.setLogradouro(endereco.getLogradouro());
            endReq.setNumero(endereco.getNumero());
            endReq.setComplemento(endereco.getComplemento());
            endReq.setPontoDeReferencia(endereco.getPontoDeReferencia());
            endReq.setIdBairro(endereco.getBairro().getIdBairro());
        } else {
            throw new Exception("Cliente não encontrado!");
        }
        return endReq;
    }

    @CrossOrigin
    @PostMapping("/incluir")
    public void incluir(@RequestBody EnderecoRequest enderecoRequest) throws Exception{
        Endereco endereco = new Endereco();
        endereco.setLogradouro(enderecoRequest.getLogradouro());
        endereco.setNumero(enderecoRequest.getNumero());
        endereco.setComplemento(enderecoRequest.getComplemento());
        endereco.setPontoDeReferencia(enderecoRequest.getPontoDeReferencia());

        var objeto = bairroRepository.findById(enderecoRequest.getIdBairro());

        if(objeto.isPresent()){
            Bairro bairro = objeto.get();
            endereco.setBairro(bairro);
        } else {
            throw new Exception("Bairro não cadastrado");            
        }
        

        enderecoRepository.save(endereco);
    }

    @CrossOrigin
    @PostMapping("/alterar")
    public void alterarEndereco(@RequestBody EnderecoRequest enderecoRequest) throws Exception {
        var objeto = enderecoRepository.findById(enderecoRequest.getIdEndereco());
        
        Endereco endereco = new Endereco();
        if(objeto.isPresent()) {
            endereco = objeto.get();
            endereco.setLogradouro(enderecoRequest.getLogradouro());
            endereco.setNumero(enderecoRequest.getNumero());
            endereco.setComplemento(enderecoRequest.getComplemento());
            endereco.setPontoDeReferencia(enderecoRequest.getPontoDeReferencia());
        } else{
            throw new Exception("Endereço não encontrado!");
        }
        
        var objeto2 = bairroRepository.findById(enderecoRequest.getIdBairro());

        if(objeto2.isPresent()) {
            Bairro bairro = objeto2.get();
            endereco.setBairro(bairro);
        }

        enderecoRepository.save(endereco);

    }

    @CrossOrigin
    @PostMapping("/excluir/{id}")
    public void excluirEndereco(@PathVariable("id") Long id) throws Exception{
        try {
            enderecoRepository.deleteById(id);
        } catch(Exception e) {
            throw new Exception("Endereco nao encontrado!");
        }
    }
}
