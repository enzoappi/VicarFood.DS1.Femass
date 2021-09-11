package com.br.vicarfood.request;

//import com.br.vicarfood.model.Produto;

public class CarrinhoCompraRequest {
    //private Long idCarrinhoCompra;
    //private Produto produto;
    private Long idProduto;
    //private String nome;
    //private Double preco;
    //private String descricao;
    private Integer quantidadeProduto;
    //private Double valorParcialItens;
    //private Double valorParcialTotalCompra;
/*
    public Long getIdCarrinhoCompra() {
        return idCarrinhoCompra;
    }

    public void setIdCarrinhoCompra(Long idCarrinhoCompra) {
        this.idCarrinhoCompra = idCarrinhoCompra;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }
*/
    public Long getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(Long idProduto) {
        this.idProduto = idProduto;
    }
/*
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
*/
    public Integer getQuantidadeProduto() {
        return quantidadeProduto;
    }

    public void setQuantidadeProduto(Integer quantidadeProduto) {
        this.quantidadeProduto = quantidadeProduto;
    }
/*
    public Double getValorParcialItens() {
        return valorParcialItens;
    }

    public void setValorParcialItens(Double valorParcialItens) {
        this.valorParcialItens = valorParcialItens;
    }

    public Double getValorParcialTotalCompra() {
        return valorParcialTotalCompra;
    }

    public void setValorParcialTotalCompra(Double valorParcialTotalCompra) {
        this.valorParcialTotalCompra = valorParcialTotalCompra;
    }
*/
}
