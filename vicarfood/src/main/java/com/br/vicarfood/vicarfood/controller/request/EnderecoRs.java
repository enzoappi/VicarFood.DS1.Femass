package com.br.vicarfood.vicarfood.controller.request;

import com.br.vicarfood.vicarfood.model.Bairro;

public class EnderecoRs {
    private Long id;
    private String logradouro;
    private String numero;
    private String nomeBairro;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getNomeBairro() {
        return nomeBairro;
    }

    public void setNomeBairro(String nomeBairro) {
        this.nomeBairro = nomeBairro;
    }
}
