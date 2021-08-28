package com.br.vicarfood.controller;

import java.util.ArrayList;
import java.util.List;

/* import com.br.vicarfood.model.Imagem; */
import com.br.vicarfood.model.Produto;
import com.br.vicarfood.model.TipoProduto;
/* import com.br.vicarfood.repository.ImagemRepository; */
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
    /* private final ImagemRepository imagemRepository; */

/*     public ProdutoController(ProdutoRepository produtoRepository, ImagemRepository imagemRepository) {
        this.produtoRepository = produtoRepository;
        this.imagemRepository = imagemRepository;
    } */
    
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
            p1.setId(produto.getId());
            p1.setDescricao(produto.getDescricao());
            //p1.setImagem(produto.getImagem().getFoto());
            p1.setNome(produto.getNome());
            p1.setPreco(produto.getPreco());
            p1.setSituacao(produto.getSituacao());
            p1.setTipo(produto.getTipoProduto());
            pdrs.add(p1);
        }

        return pdrs;
    }
/*
    @GetMapping("/{tipo}")
    public List<Produto> getProdutosTipo(@PathVariable("tipo") String tipoProduto){
        return produtoRepository.findByTipoProduto(tipoProduto);
    }

   */

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
            p1.setId(produto.getId());
            p1.setDescricao(produto.getDescricao());
            //p1.setImagem(produto.getImagem().getFoto());
            p1.setNome(produto.getNome());
            p1.setPreco(produto.getPreco());
            p1.setSituacao(produto.getSituacao());
            p1.setTipo(produto.getTipoProduto());
            pdrs.add(p1);
        }

        if(tipoProduto.toString().equals("batata")) {
            List<ProdutoRequest> pdrsOrdenado = new ArrayList<ProdutoRequest>();
            String saboresDeBatataRostie[] = {"Agreste", "Calabresa", "Frango com Catupiry", "Lombo", "Palmito", "Portuguesa", "Presunto", "Presunto Especial", "Vegetariana", "Vicar"};
            for(int i=0; i<=9; i++){
                for(ProdutoRequest pr : pdrs) {
                        if(pr.getNome().equals(saboresDeBatataRostie[i])){
                            pdrsOrdenado.add(pr);
                        }
                }
            }
            return pdrsOrdenado;
        } else {
            return pdrs;
        }
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

        /* List <Imagem> imagens = imagemRepository.findAll();

        Imagem imagem = null;
        for(Imagem i : imagens){
            if(i.getFoto().equals(produtoRequest.getImagem()));
                imagem = i;
        }

        if(imagem==null){
            imagem = new Imagem();
            imagem.setFoto(produtoRequest.getImagem());
            imagemRepository.save(imagem);
            
        }

        produto.setImagem(imagem); */

        produtoRepository.save(produto);
    }

    /*@CrossOrigin
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

    @CrossOrigin
    @PostMapping("/alterar")
    public void alterar(@RequestBody ProdutoRequest produtoRequest){

    }*/

}
