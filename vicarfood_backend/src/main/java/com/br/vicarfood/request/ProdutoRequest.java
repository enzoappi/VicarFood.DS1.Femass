package com.br.vicarfood.request;
import com.br.vicarfood.model.Situacao;
import com.br.vicarfood.model.TipoProduto;

public class ProdutoRequest {
    private Long idProduto;
    private String nome;
    private Double preco;
    private String descricao;
    private Situacao situacao;
    private TipoProduto tipo;
    private String imagem;
    
    public TipoProduto getTipo() {
        return tipo;
    }
    public void setTipo(TipoProduto tipo) {
        this.tipo = tipo;
    }
    public Long getIdProduto() {
        return idProduto;
    }
    public void setIdProduto(Long idProduto) {
        this.idProduto = idProduto;
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
    
    public String getImagem() {
        return imagem;
    }
    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
    public Situacao getSituacao() {
        return situacao;
    }
    public void setSituacao(Situacao situacao) {
        this.situacao = situacao;
    }    
}
