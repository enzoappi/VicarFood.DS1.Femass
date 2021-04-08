package com.br.vicarfood.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;
import com.br.vicarfood.vicarfood.controller.request.ClienteRequest;
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
    public List<ClienteRequest> getCliente(){
        List<Cliente> clientes = clienteRepository.findAll();

        List<ClienteRequest> clirs = new ArrayList<ClienteRequest>();
        for(Cliente cliente : clientes) {
            ClienteRequest c = new ClienteRequest();
            c.setNome(cliente.getNome());
            c.setCpf(cliente.getCpf());
            c.setTelefone(cliente.getTelefone());
            c.setLogradouro(cliente.getEndereco().getLogradouro());
            c.setNumero(cliente.getEndereco().getNumero());
            c.setNomeBairro(cliente.getEndereco().getBairro().getNomeBairro());
            clirs.add(c);
        }

        return clirs;
    }

    @PostMapping("/incluir") 
    public void incluirCliente(@RequestBody ClienteRequest clienteRequest) throws Exception{
        Cliente cliente = new Cliente();
        cliente.setNome(clienteRequest.getNome());
        cliente.setCpf(clienteRequest.getCpf());
        cliente.setTelefone(clienteRequest.getTelefone());

        List<Endereco> enderecos = enderecoRepository.findAll();
        
        Endereco endereco = null;
        for(Endereco e : enderecos){
            /*if(e.getLogradouro().equals(clienteRequest.getLogradouro()) && e.getNumero().equals(clienteRequest.getNumero())) {*/
            if(e.getBairro().getNomeBairro().equals(clienteRequest.getNomeBairro())) {
                if(e.getLogradouro().equals(clienteRequest.getLogradouro()) && e.getNumero().equals(clienteRequest.getNumero())) {
                    endereco = e;
                }
            }
        }

        if(endereco==null){
            throw new Exception("Endereco nao cadastrado"); 
        }
        
        cliente.setEndereco(endereco);

        clienteRepository.save(cliente);
    }

    @GetMapping("/excluir{cpf}")
    public void excluirCliente (@PathVariable ("cpf") String cpf) throws Exception{
        Cliente c = clienteRepository.findByCpf(cpf);

        if (c != null){
            Cliente cliente = c;
            clienteRepository.delete(cliente);
        }else{
            throw new Exception("Cliente não encontrado");
        }

    }
    
    @GetMapping("/alterar{cpf}")
    public void alterarCliente(@PathVariable ("cpf") String cpf, @RequestBody ClienteRequest clienteRequest) throws Exception {
        Cliente c = clienteRepository.findByCpf(cpf);
        c.setNome(clienteRequest.getNome());
        c.setTelefone(clienteRequest.getTelefone());

        clienteRepository.save(c);

    }
}
