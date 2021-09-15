package com.br.vicarfood.request;

import java.util.ArrayList;
import java.util.List;

import com.br.vicarfood.model.Produto;

//import com.br.vicarfood.model.Produto;

public class CarrinhoCompraRequest {
    private List<Produto> produtos = new ArrayList<>();
    private List<Integer> qtdesProdutos = new ArrayList<>();
    private List<Double> precosIndividuaisProdutos = new ArrayList<>();
    private Long idProduto;
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
*/
    public List<Produto> getProdutos() {
        return this.produtos;
    }

    public void setProduto(Produto produto) {
        this.produtos.add(produto);
    }

    public Long getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(Long idProduto) {
        this.idProduto = idProduto;
    }

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
*/
    public List<Integer> getQtdesProdutos() {
        return this.qtdesProdutos;
    }

    public void setQtdesProdutos(Integer qtdeProduto) {
        this.qtdesProdutos.add(qtdeProduto);
    }

    public List<Double> getPrecosIndividuaisProdutos() {
        return this.precosIndividuaisProdutos;
    }

    public void setPrecosIndividuaisProdutos(Double precosIndividuaisProdutos) {
        this.precosIndividuaisProdutos.add(precosIndividuaisProdutos);
    }

/*
    public Double getValorParcialTotalCompra() {
        return valorParcialTotalCompra;
    }

    public void setValorParcialTotalCompra(Double valorParcialTotalCompra) {
        this.valorParcialTotalCompra = valorParcialTotalCompra;
    }
*/
}
