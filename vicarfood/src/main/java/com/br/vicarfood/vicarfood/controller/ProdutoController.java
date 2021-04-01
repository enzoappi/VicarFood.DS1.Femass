package com.br.vicarfood.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.vicarfood.controller.request.ProdutoRs;
import com.br.vicarfood.vicarfood.model.Imagem;
import com.br.vicarfood.vicarfood.model.Produto;
import com.br.vicarfood.vicarfood.repository.ImagemRepository;
import com.br.vicarfood.vicarfood.repository.ProdutoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
    private final ProdutoRepository produtoRepository;
    private final ImagemRepository imagemRepository;

    public ProdutoController(ProdutoRepository produtoRepository, ImagemRepository imagemRepository) {
        this.produtoRepository = produtoRepository;
        this.imagemRepository = imagemRepository;
    }    

    @GetMapping("/")
    public List<ProdutoRs> getProdutos(){
        List<Produto> produtos = produtoRepository.findAll();

        List<ProdutoRs> pdrs = new ArrayList<ProdutoRs>();

        for(Produto produto : produtos){
            ProdutoRs p1 = new ProdutoRs();
            p1.setId(produto.getId());
            p1.setDescricao(produto.getDescricao());
            p1.setImagem(produto.getImagem().getFoto());
            p1.setNome(produto.getNome());
            p1.setPreco(produto.getPreco());
            p1.setSituacao(produto.getSituacao());
            pdrs.add(p1);
        }

        return pdrs;
    }

    @PostMapping("/incluir")
    public void incluir(@RequestBody ProdutoRs produtoRs){
        Produto produto = new Produto();
        produto.setDescricao(produtoRs.getDescricao());
        produto.setNome(produtoRs.getNome());
        produto.setPreco(produtoRs.getPreco());
        produto.setSituacao(produtoRs.getSituacao());

        List <Imagem> imagens = imagemRepository.findAll();

        Imagem imagem = null;
        for(Imagem i : imagens){
            if(i.getFoto().equals(produtoRs.getImagem()));
                imagem = i;
        }

        if(imagem==null){
            imagem = new Imagem();
            imagem.setFoto(produtoRs.getImagem());
            imagemRepository.save(imagem);
            
        }

        produto.setImagem(imagem);

        produtoRepository.save(produto);
    }

    @GetMapping("/{id}")
    public void remover(@PathVariable("id")Long id) throws Exception{
        var p = produtoRepository.findById(id);

        if (p.isPresent()){
            Produto produto = p.get();
            produtoRepository.delete(produto);

        }
        else{
            throw new Exception("Id não encontrado");
        }
    }

    @PostMapping("/alterar")
    public void alterar(@RequestBody ProdutoRs produtoRs){

    }

}
