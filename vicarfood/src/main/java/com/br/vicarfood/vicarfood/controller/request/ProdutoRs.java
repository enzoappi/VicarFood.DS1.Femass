package com.br.vicarfood.vicarfood.controller.request;

import com.br.vicarfood.vicarfood.model.Imagem;
import com.br.vicarfood.vicarfood.model.Situacao;

public class ProdutoRs {
    private Long id;
    private String nome;
    private Double preco;
    private String descricao;
    private Situacao situacao;
    private Imagem imagem;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public Double getPreco() {
        return preco;
    }
    public void setPreco(Double preco) {
        this.preco = preco;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public Situacao getSituacao() {
        return situacao;
    }
    public void setSituacao(Situacao situacao) {
        this.situacao = situacao;
    }
    public Imagem getImagem() {
        return imagem;
    }
    public void setImagem(Imagem imagem) {
        this.imagem = imagem;
    }

    
    
}
