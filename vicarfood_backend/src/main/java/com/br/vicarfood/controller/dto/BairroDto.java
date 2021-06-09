package com.br.vicarfood.controller.dto;

public class BairroDto {

    private Long idBairro;
    private String nomeBairro;
    private Double valor;

    public Long getIdBairro() {
        return idBairro;
    }
    public void setIdBairro(Long idBairro) {
        this.idBairro = idBairro;
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
