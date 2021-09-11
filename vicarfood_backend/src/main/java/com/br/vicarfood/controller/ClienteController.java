package com.br.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.model.Cliente;
import com.br.vicarfood.model.Endereco;
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

    public ClienteController(ClienteRepository clienteRepository, EnderecoRepository enderecoRepository) {
        this.clienteRepository = clienteRepository;
        this.enderecoRepository = enderecoRepository;
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
            c.setIdEndereco(cliente.getEndereco().getIdEndereco());
            clirs.add(c);
        }

        return clirs;
    }

    @CrossOrigin
    @GetMapping("/listar/{cpf}")
    public ClienteRequest getClientePorCpf(@PathVariable("cpf") String cpf) throws Exception{

        var objeto = clienteRepository.findById(cpf);
        
        ClienteRequest cliReq = new ClienteRequest();
        
        if(objeto.isPresent()) {
            cliReq.setIncluindo(false); //adicionei
            Cliente cliente = objeto.get();
            cliReq.setCpf(cliente.getCpf());
            cliReq.setNomeCliente(cliente.getNomeCliente());
            cliReq.setTelefone(cliente.getTelefone());
            cliReq.setIdEndereco(cliente.getEndereco().getIdEndereco());
            var objeto2 = enderecoRepository.findById(cliente.getEndereco().getIdEndereco());
            Endereco end = objeto2.get(); //adicionei
            cliReq.setLogradouro(end.getLogradouro()); //adicionei
            cliReq.setNumero(end.getNumero()); //adicionei
            cliReq.setComplemento(end.getComplemento()); //adicionei
            cliReq.setPontoDeReferencia(end.getPontoDeReferencia()); //adicionei
            cliReq.setBairro(end.getBairro()); //adicionei
        } else {
            //throw new Exception("Cliente não encontrado!");
            cliReq.setCpf(""); //adicionei
            cliReq.setNomeCliente(""); //adicionei
            cliReq.setTelefone(""); //adicionei
            cliReq.setIdEndereco(null); //adicionei
            cliReq.setIncluindo(true); //adicionei
            cliReq.setLogradouro(""); //adicionei
            cliReq.setNumero(""); //adicionei
            cliReq.setComplemento(""); //adicionei
            cliReq.setPontoDeReferencia(""); //adicionei
            cliReq.setBairro(""); //adicionei
        }
        return cliReq;
    }

    @CrossOrigin
    @PostMapping("/incluir") 
    public void incluirCliente(@RequestBody ClienteRequest clienteRequest) throws Exception{
        Cliente cliente = new Cliente();
        cliente.setNomeCliente(clienteRequest.getNomeCliente());
        cliente.setCpf(clienteRequest.getCpf());
        cliente.setTelefone(clienteRequest.getTelefone());

        var objeto = enderecoRepository.findById(clienteRequest.getIdEndereco());
        if(objeto.isPresent()) {
            Endereco endereco = objeto.get();
            enderecoRepository.save(endereco);
        } else {
            throw new Exception("Endereco não encontrado!");
        }
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
