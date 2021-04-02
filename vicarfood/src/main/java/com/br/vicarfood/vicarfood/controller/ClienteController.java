package com.br.vicarfood.vicarfood.controller;

import java.util.List;
import com.br.vicarfood.vicarfood.controller.request.ClienteRequest;
import com.br.vicarfood.vicarfood.model.Cliente;
import com.br.vicarfood.vicarfood.repository.ClienteRepository;
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

    public ClienteController(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @GetMapping("/")
    public List<Cliente> getCliente(){
        return clienteRepository.findAll();
    }

    @PostMapping("/incluirCliente")
    public void incluirCliente(@RequestBody ClienteRequest clienteRequest){
        Cliente cliente = new Cliente();
        cliente.setNome(clienteRequest.getNome());
        cliente.setTelefone(clienteRequest.getTelefone());
        cliente.setEndereco(clienteRequest.getEndereco());

        clienteRepository.save(cliente);
    }

    @GetMapping("/telefone/{id}")
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
    public void alterar(@RequestBody ClienteRequest clienteRequest){
               
    }

}
