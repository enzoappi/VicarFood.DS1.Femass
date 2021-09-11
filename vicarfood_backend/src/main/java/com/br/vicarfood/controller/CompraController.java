/*package com.br.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.model.Cliente;
import com.br.vicarfood.model.Compra;
import com.br.vicarfood.model.SituacaoCompra;
import com.br.vicarfood.repository.ClienteRepository;
import com.br.vicarfood.repository.CompraRepository;
import com.br.vicarfood.request.CompraRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/compra")
public class CompraController {
    private final CompraRepository compraRepository;
    private final ClienteRepository clienteRepository;

    public CompraController(CompraRepository compraRepository, ClienteRepository clienteRepository) {
        this.compraRepository = compraRepository;
        this.clienteRepository = clienteRepository;
    }

    @CrossOrigin
    @GetMapping("/")
    public List<CompraRequest> getCompra(){
        List<Compra> compras = compraRepository.findAll();

        List<CompraRequest> comprs = new ArrayList<CompraRequest>();
        for(Compra compra : compras) {
            CompraRequest c = new CompraRequest();
            c.setIdCompra(compra.getIdCompra());
            c.setDataCompra(compra.getDataCompra());
            c.setValorCompra(compra.getValorCompra());
            c.setQuantidadeProdutos(compra.getQuantidadeProdutos());
            c.setFormaPagamento(compra.getFormaPagamento());
            c.setCpf(compra.getCliente().getCpf());
            c.setSituacaoCompra(compra.getSituacaoCompra());
            comprs.add(c);
        }

        return comprs;
    }
    
    @CrossOrigin
    @PostMapping("/incluir")
    public void incluirCompra(@RequestBody CompraRequest compraRequest) throws Exception{
        Compra compra = new Compra();
        compra.setDataCompra(compraRequest.getDataCompra());
        compra.setValorCompra(compraRequest.getValorCompra());
        compra.setQuantidadeProdutos(compraRequest.getQuantidadeProdutos());
        compra.setFormaPagamento(compraRequest.getFormaPagamento());
        compra.setSituacaoCompra(SituacaoCompra.realizada);

        List <Cliente> clientes = clienteRepository.findAll();

        Cliente cliente = null;
        for(Cliente c : clientes){
            if(c.getCpf().equals(compraRequest.getCpf()));
                cliente = c;
        }

        if(cliente == null){
            throw new Exception("Cliente não cadastrado! Por favor adicione uma conta antes de realizar a compra!");
        }

        compra.setCliente(cliente);

        compraRepository.save(compra);
    }

    @CrossOrigin
    @GetMapping("/estornar{idCompra}")
    public void estornarCompra(@PathVariable("idCompra") Long idCompra) throws Exception{
        var c = compraRepository.findById(idCompra);

        if(c.isPresent()) {
            Compra compra = c.get();
            compra.setSituacaoCompra(SituacaoCompra.estornada);
        } else {
            throw new Exception("Compra não encontrada!");
        }
    }
}*/
