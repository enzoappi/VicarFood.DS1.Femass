package com.br.vicarfood.vicarfood.controller.request;

public class BairroRequest {
    private Long id;
    private String nomeBairro;
    private Double valor;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNomeBairro() {
        return nomeBairro;
    }
    public void setNomeBairro(String nomeBairro) {
        this.nomeBairro = nomeBairro;
    }
    public Double getValor() {
        return valor;
    }
    public void setValor(Double valor) {
        this.valor = valor;
    }

}
