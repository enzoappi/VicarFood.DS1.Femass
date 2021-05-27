package com.br.vicarfood.controller;

import java.util.List;

import com.br.vicarfood.controller.dto.BairroDto;
import com.br.vicarfood.controller.dto.ClienteDto;
import com.br.vicarfood.controller.dto.EnderecoDto;
import com.br.vicarfood.model.Bairro;
import com.br.vicarfood.model.Cliente;
import com.br.vicarfood.model.Endereco;
import com.br.vicarfood.repository.BairroRepository;
import com.br.vicarfood.repository.ClienteRepository;
import com.br.vicarfood.repository.EnderecoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clienteDto")
public class ClienteControllerDto {
    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private BairroRepository bairroRepository;

    @CrossOrigin
    @PostMapping("/incluirBairro")
    public void incluirBairro(@RequestBody BairroDto bairroDto) {
        Bairro b = new Bairro();
        b.setNomeBairro(bairroDto.getNomeBairro());
        b.setValor(bairroDto.getValor());
        bairroRepository.save(b);
    }

    @CrossOrigin
    @GetMapping("/listarBairros")
    public List<Bairro> listarBairros() {
        return bairroRepository.findAll();
    }

    @CrossOrigin
    @PostMapping("/incluirEndereco")
    public void incluirEndereco(@RequestBody EnderecoDto enderecoDto) throws Exception{
        Endereco e = new Endereco();
        
        var bairro = bairroRepository.findById(enderecoDto.getIdBairro());
        
        if(bairro.isPresent()) {
            e.setBairro(bairro.get());
        } else {
            throw new Exception("Não foi possível encontrar o Bairro");
        }

        e.setLogradouro(enderecoDto.getLogradouro());
        e.setNumero(enderecoDto.getNumero());
        e.setComplemento(enderecoDto.getComplemento());
        e.setPontoDeReferencia(enderecoDto.getPontoDeReferencia());

        enderecoRepository.save(e);
    }

    @CrossOrigin
    @GetMapping("/listarEnderecos")
    public List<Endereco> listarEnderecos() {
        return enderecoRepository.findAll();
    }

/*    
    @CrossOrigin
    @GetMapping("/listarEnderecoPeloId/{idEndereco}")
    public EnderecoDto listarEnderecoPeloId(@PathVariable("idEndereco") Long idEndereco) throws Exception {

        List<Endereco> endereco = enderecoRepository.findAll();

        EnderecoDto eDto = new EnderecoDto();
        
        try{
            for(Endereco e : endereco) {
                if(e.getId().equals(idEndereco)) {
                    eDto.setLogradouro(e.getLogradouro());
                    eDto.setNumero(e.getNumero());
                    eDto.setComplemento(e.getComplemento());
                    eDto.setPontoDeReferencia(e.getPontoDeReferencia());
                    eDto.setIdBairro(e.getBairro().getId());
                }
            }
            return eDto;
        } catch(Exception exc) {
            throw new Exception("Cliente não encontrado");
        }

    }
*/

@CrossOrigin
@GetMapping("/listarEnderecoPeloId/{cpf}")
public EnderecoDto listarEnderecoPeloId(@PathVariable("cpf") String cpf) throws Exception {
    List<Cliente> clientes = clienteRepository.findAll();

    EnderecoDto eDto = new EnderecoDto();

    try{
        for(Cliente c : clientes) {
            if(c.getCpf().equals(cpf)) {
                eDto.setLogradouro(c.getEndereco().getLogradouro());
                eDto.setNumero(c.getEndereco().getNumero());
                eDto.setComplemento(c.getEndereco().getComplemento());
                eDto.setPontoDeReferencia(c.getEndereco().getPontoDeReferencia());
                eDto.setIdBairro(c.getEndereco().getBairro().getIdBairro());
            }
        }
            return eDto;
    } catch (Exception exc) {
        throw new Exception("Cliente não encontrado");
    }

/*
    List<Endereco> endereco = enderecoRepository.findAll();

    EnderecoDto eDto = new EnderecoDto();
    
    try{
        for(Endereco e : endereco) {
            if(e.getId().equals(idEndereco)) {
                eDto.setLogradouro(e.getLogradouro());
                eDto.setNumero(e.getNumero());
                eDto.setComplemento(e.getComplemento());
                eDto.setPontoDeReferencia(e.getPontoDeReferencia());
                eDto.setIdBairro(e.getBairro().getId());
            }
        }
        return eDto;
    } catch(Exception exc) {
        throw new Exception("Cliente não encontrado");
    }
*/
}



    @CrossOrigin
    @PostMapping("/incluirCliente")
    public void incluirCliente(@RequestBody ClienteDto clienteDto) throws Exception{
        Cliente c = new Cliente();
        
        var endereco = enderecoRepository.findById(clienteDto.getIdEndereco());
        
        if(endereco.isPresent()) {
            c.setEndereco(endereco.get());
        } else {
            throw new Exception("Não foi possível encontrar o Endereco");
        }

        c.setCpf(clienteDto.getCpf());
        c.setNomeCliente(clienteDto.getNomeCliente());
        c.setTelefone(clienteDto.getTelefone());

        clienteRepository.save(c);
    }

//    /*
    @CrossOrigin
    @GetMapping("/listarClientes")
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }
//    */

    @CrossOrigin
    @GetMapping("/listarClientesPorCpf/{cpf}")
    //@ResponseBody
    public ClienteDto getClienteEnderecoBairroPorCpf(@PathVariable("cpf") String cpf) throws Exception{
        List<Cliente> clientes = clienteRepository.findAll();
        
        ClienteDto clienteDto = new ClienteDto();
        
        try{
            for(Cliente c : clientes) {
                if(c.getCpf().equals(cpf)) {
                    clienteDto.setCpf(c.getCpf());
                    clienteDto.setNomeCliente(c.getNomeCliente());
                    clienteDto.setTelefone(c.getTelefone());
                    clienteDto.setIdEndereco(c.getEndereco().getIdEndereco());
                }
            }
            return clienteDto;
        } catch(Exception exc) {
            throw new Exception("Cliente não encontrado");
        }
    }
    
}
