package com.br.vicarfood.vicarfood.controller.request;

import java.time.LocalDate;

import com.br.vicarfood.vicarfood.model.FormaPagamento;
import com.br.vicarfood.vicarfood.model.SituacaoCompra;

public class CompraRequest {
    private Long idCompra;
    private LocalDate dataCompra;
    private Double valorCompra;
    private Integer quantidadeProdutos;
    private FormaPagamento formaPagamento;
    private String cpf;
    private SituacaoCompra situacaoCompra;

    public Long getIdCompra() {
        return idCompra;
    }

    public void setIdCompra(Long idCompra) {
        this.idCompra = idCompra;
    }

    public LocalDate getDataCompra() {
        return dataCompra;
    }

    public void setDataCompra(LocalDate dataCompra) {
        this.dataCompra = dataCompra;
    }

    public Double getValorCompra() {
        return valorCompra;
    }

    public void setValorCompra(Double valorCompra) {
        this.valorCompra = valorCompra;
    }

    public Integer getQuantidadeProdutos() {
        return quantidadeProdutos;
    }

    public void setQuantidadeProdutos(Integer quantidadeProdutos) {
        this.quantidadeProdutos = quantidadeProdutos;
    }

    public FormaPagamento getFormaPagamento() {
        return formaPagamento;
    }

    public void setFormaPagamento(FormaPagamento formaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public SituacaoCompra getSituacaoCompra() {
        return situacaoCompra;
    }

    public void setSituacaoCompra(SituacaoCompra situacaoCompra) {
        this.situacaoCompra = situacaoCompra;
    }
}
