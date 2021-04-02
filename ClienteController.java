package com.br.vicarfood.vicarfood.controller;

import java.util.List;
import com.br.vicarfood.vicarfood.controller.request.ClienteRs;
import com.br.vicarfood.vicarfood.model.Cliente;
import com.br.vicarfood.vicarfood.model.Endereco;
import com.br.vicarfood.vicarfood.repository.ClienteRepository;
import com.br.vicarfood.vicarfood.repository.EnderecoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Cliente")
public class ClienteController {
    private final ClienteRepository clienteRepository;
    private final EnderecoRepository enderecoRepository;

    public ClienteController(ClienteRepository clienteRepository, EnderecoRepository enderecoRepository) {
        this.clienteRepository = clienteRepository;
        this.enderecoRepository = enderecoRepository;
    }

    @GetMapping("/")
    public List<Cliente> getCliente(){
        return clienteRepository.findAll();
    }

    @PostMapping("/incluirCliente")
    public void incluirCliente(@RequestBody ClienteRs ClienteRs){
        Cliente cliente = new Cliente();
        cliente.setNome(ClienteRs.getNome());
        cliente.setTelefone(ClienteRs.getTelefone());
        cliente.setEndereco(ClienteRs.getEndereco());

        List<Endereco> enderecos = enderecoRepository.findAll();
        
        Endereco endereco = null;
        for(Endereco e : enderecos){
            if(e.getId().equals(ClienteRs.getEndereco().getId()));
                endereco = e;
        }

        if(endereco==null){
            endereco = new Endereco();
            endereco.setLogradouro(ClienteRs.getEndereco().getLogradouro());
            endereco.setNumero(ClienteRs.getEndereco().getNumero());
            endereco.setBairro(ClienteRs.getEndereco().getBairro());
            enderecoRepository.save(endereco);
        }
        cliente.setEndereco(endereco);

        clienteRepository.save(cliente);
    }

    @GetMapping("{id}")
    public void remover (@PathVariable("id") Long id) throws Exception{
        var c = clienteRepository.findById(id);

        if (c.isPresent()){
            Cliente cliente = c.get();
            clienteRepository.delete(cliente);
        }else{
            throw new Exception("Id não encontrado");
        }

    }

    @PostMapping("/alterarCliente")
    public void alterar(@RequestBody ClienteRs ClienteRs){
               
    }
}