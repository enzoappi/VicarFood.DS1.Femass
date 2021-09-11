package com.br.vicarfood.controller;



import com.br.vicarfood.model.Cliente;
import com.br.vicarfood.model.Endereco;
import com.br.vicarfood.repository.ClienteRepository;
import com.br.vicarfood.repository.EnderecoRepository;
import com.br.vicarfood.request.EnderecoRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/endereco")
public class EnderecoController {
    private final ClienteRepository clienteRepository;
    private final EnderecoRepository enderecoRepository;
    
    public EnderecoController(ClienteRepository clienteRepository, EnderecoRepository enderecoRepository) {
        this.clienteRepository = clienteRepository;
        this.enderecoRepository = enderecoRepository;
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
            endReq.setCep(endereco.getCep());
            endReq.setLogradouro(endereco.getLogradouro());
            endReq.setNumero(endereco.getNumero());
            endReq.setComplemento(endereco.getComplemento());
            endReq.setPontoDeReferencia(endereco.getPontoDeReferencia());
            endReq.setBairro(endereco.getBairro());
        } else {
            throw new Exception("Cliente não encontrado!");
        }
        return endReq;
    }


}
