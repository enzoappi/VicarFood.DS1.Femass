package com.br.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.model.Bairro;
import com.br.vicarfood.model.Cliente;
import com.br.vicarfood.model.Endereco;
import com.br.vicarfood.repository.BairroRepository;
import com.br.vicarfood.repository.ClienteRepository;
import com.br.vicarfood.repository.EnderecoRepository;
import com.br.vicarfood.request.ClienteRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    private final ClienteRepository clienteRepository;
    private final EnderecoRepository enderecoRepository;
    private final BairroRepository bairroRepository;

    public ClienteController(ClienteRepository clienteRepository, EnderecoRepository enderecoRepository, BairroRepository bairroRepository) {
        this.clienteRepository = clienteRepository;
        this.enderecoRepository = enderecoRepository;
        this.bairroRepository = bairroRepository;
    }

    @CrossOrigin
    @GetMapping("/listar")
    public List<ClienteRequest> getCliente(){
        List<Cliente> clientes = clienteRepository.findAll();

        List<ClienteRequest> clirs = new ArrayList<ClienteRequest>();
        for(Cliente cliente : clientes) {
            ClienteRequest c = new ClienteRequest();
            c.setNomeCliente(cliente.getNomeCliente());
            c.setCpf(cliente.getCpf());
            c.setTelefone(cliente.getTelefone());
            c.setLogradouro(cliente.getEndereco().getLogradouro());
            c.setNumero(cliente.getEndereco().getNumero());
            c.setComplemento(cliente.getEndereco().getComplemento());
            c.setPontoDeReferencia(cliente.getEndereco().getPontoDeReferencia());
            c.setIdBairro(cliente.getEndereco().getBairro().getIdBairro());
            //c.setNomeBairro(cliente.getEndereco().getBairro().getNomeBairro());
            clirs.add(c);
        }

        return clirs;
    }

    @CrossOrigin
    @PostMapping("/incluir") 
    public void incluirCliente(@RequestBody ClienteRequest clienteRequest) throws Exception{
        Cliente cliente = new Cliente();
        cliente.setNomeCliente(clienteRequest.getNomeCliente());
        cliente.setCpf(clienteRequest.getCpf());
        cliente.setTelefone(clienteRequest.getTelefone());

        Endereco endereco = new Endereco();
        endereco.setLogradouro(clienteRequest.getLogradouro());
        endereco.setNumero(clienteRequest.getNumero());
        endereco.setComplemento(clienteRequest.getComplemento());
        endereco.setPontoDeReferencia(clienteRequest.getPontoDeReferencia());

        var objeto = bairroRepository.findById(clienteRequest.getIdBairro());
        if(objeto.isPresent()) {
            Bairro bairro = objeto.get();
            endereco.setBairro(bairro);
            enderecoRepository.save(endereco);
        } else {
            throw new Exception("Bairro não encontrado!");
        }

/*
        List<Endereco> enderecos = enderecoRepository.findAll();

        Endereco endereco = null;
        
        for(Endereco e : enderecos){
            if(e.getLogradouro().equals(clienteRequest.getLogradouro()) && e.getNumero().equals(clienteRequest.getNumero()) && e.getComplemento().equals(clienteRequest.getComplemento())) {
                if(e.getBairro().getNomeBairro().equals(clienteRequest.getNomeBairro())) {
                    if(e.getLogradouro().equals(clienteRequest.getLogradouro()) && e.getNumero().equals(clienteRequest.getNumero())) {
                        endereco = e;
                    }
                }
            }
        }
        if(endereco==null){
            throw new Exception("Endereco nao cadastrado"); 
        }
*/        
        cliente.setEndereco(endereco);

        clienteRepository.save(cliente);
    }

    @CrossOrigin
    @PostMapping("/alterar")
    public void alterarCliente(@RequestBody ClienteRequest clienteRequest) throws Exception {
        var objeto = clienteRepository.findById(clienteRequest.getCpf());

        if(objeto.isPresent()){
            Cliente c = objeto.get();
            c.setNomeCliente(clienteRequest.getNomeCliente());
            c.setTelefone(clienteRequest.getTelefone());
            clienteRepository.save(c);
        } else {
            throw new Exception("Não foi possível alterar o cliente");
        }

    }

    @CrossOrigin
    @PostMapping("/excluir/{cpf}")
    public void excluirCliente (@PathVariable("cpf") String cpf) throws Exception{
        try {
            clienteRepository.deleteById(cpf);
            } catch (Exception e) {
                throw new Exception("Não foi possível realizar a exclusão");
            }
    }
}
