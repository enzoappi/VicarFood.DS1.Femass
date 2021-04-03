package com.br.vicarfood.vicarfood.controller;

import java.util.ArrayList;
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
@RequestMapping("/cliente")
public class ClienteController {
    private final ClienteRepository clienteRepository;
    private final EnderecoRepository enderecoRepository;

    public ClienteController(ClienteRepository clienteRepository, EnderecoRepository enderecoRepository) {
        this.clienteRepository = clienteRepository;
        this.enderecoRepository = enderecoRepository;
    }

    @GetMapping("/")
    public List<ClienteRs> getCliente(){
        List<Cliente> clientes = clienteRepository.findAll();

        List<ClienteRs> clirs = new ArrayList<ClienteRs>();
        for(Cliente cliente : clientes) {
            ClienteRs c = new ClienteRs();
            c.setNome(cliente.getNome());
            c.setTelefone(cliente.getTelefone());
            c.setLogradouro(cliente.getEndereco().getLogradouro());
            c.setNumero(cliente.getEndereco().getNumero());
            c.setNomeBairro(cliente.getEndereco().getBairro().getNome());
            clirs.add(c);
        }

        return clirs;
    }

    @PostMapping("/incluir")
    public void incluir(@RequestBody ClienteRs clienteRs) throws Exception{
        Cliente cliente = new Cliente();
        cliente.setNome(clienteRs.getNome());
        cliente.setTelefone(clienteRs.getTelefone());

        List<Endereco> enderecos = enderecoRepository.findAll();
        
        Endereco endereco = null;
        for(Endereco e : enderecos){
            if(e.getLogradouro().equals(clienteRs.getLogradouro()));
                endereco = e;
        }

        if(endereco==null){
            /*endereco = new Endereco();
            endereco.setLogradouro(clienteRs.getLogradouro());
            endereco.setNumero(clienteRs.getNumero());
            enderecoRepository.save(endereco);*/
            throw new Exception("Endereco nao cadastrado"); 
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

    @PostMapping("/alterar")
    public void alterar(@RequestBody ClienteRs ClienteRs){
               
    }
    
}
