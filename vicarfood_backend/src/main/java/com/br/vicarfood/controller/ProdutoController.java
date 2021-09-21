package com.br.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.model.Produto;
import com.br.vicarfood.model.TipoProduto;
import com.br.vicarfood.repository.ProdutoRepository;
import com.br.vicarfood.request.ProdutoRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/produto")
public class ProdutoController {
    private final ProdutoRepository produtoRepository;
    
    public ProdutoController(ProdutoRepository produtoRepository){
        this.produtoRepository = produtoRepository;
    }

    @CrossOrigin
    @GetMapping("/listar")
    public List<ProdutoRequest> getProdutos(){
        List<Produto> produtos = produtoRepository.findAll();

        List<ProdutoRequest> pdrs = new ArrayList<ProdutoRequest>();

        for(Produto produto : produtos){
            ProdutoRequest p1 = new ProdutoRequest();
            p1.setIdProduto(produto.getIdProduto());
            p1.setDescricao(produto.getDescricao());
            p1.setNome(produto.getNome());
            p1.setPreco(produto.getPreco());
            p1.setSituacao(produto.getSituacao());
            p1.setTipo(produto.getTipoProduto());
            p1.setImagem(produto.getImagem());
            pdrs.add(p1);
        }

        return pdrs;
    }

    @CrossOrigin
    @GetMapping("/{tipoProduto}")
    public List<ProdutoRequest> getProdutosPorTipoProduto(@PathVariable("tipoProduto") TipoProduto tipoProduto) throws Exception{

        List<Produto> produtos = produtoRepository.findByTipoProduto(tipoProduto);
        for(Produto produto : produtos) {
            System.out.println("TIPO PRODUTO :" + produto.getTipoProduto());
        }

        List<ProdutoRequest> pdrs = new ArrayList<ProdutoRequest>();
        
        for(Produto produto : produtos){
            ProdutoRequest p1 = new ProdutoRequest();
            p1.setIdProduto(produto.getIdProduto());
            p1.setDescricao(produto.getDescricao());            
            p1.setNome(produto.getNome());
            p1.setPreco(produto.getPreco());
            p1.setSituacao(produto.getSituacao());
            p1.setTipo(produto.getTipoProduto());
            p1.setImagem(produto.getImagem());
            pdrs.add(p1);
        }
        return pdrs;
        
    }

    @CrossOrigin
    @PostMapping("/incluir")
    public void incluir(@RequestBody ProdutoRequest produtoRequest){
        Produto produto = new Produto();
        produto.setDescricao(produtoRequest.getDescricao());
        produto.setNome(produtoRequest.getNome());
        produto.setPreco(produtoRequest.getPreco());
        produto.setSituacao(produtoRequest.getSituacao());
        produto.setTipoProduto(produtoRequest.getTipo());

        produtoRepository.save(produto);
    }

}
