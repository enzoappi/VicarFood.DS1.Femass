package com.br.vicarfood.controller.dto;

public class EnderecoDto {

    private Long idEndereco;
    private String logradouro;
    private String numero;
    private String complemento;
    private String pontoDeReferencia;
    private Long idBairro;

    public Long getIdEndereco() {
        return idEndereco;
    }
    public void setIdEndereco(Long idEndereco) {
        this.idEndereco = idEndereco;
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
    public String getComplemento() {
        return complemento;
    }
    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }
    public String getPontoDeReferencia() {
        return pontoDeReferencia;
    }
    public void setPontoDeReferencia(String pontoDeReferencia) {
        this.pontoDeReferencia = pontoDeReferencia;
    }
    public Long getIdBairro() {
        return idBairro;
    }
    public void setIdBairro(Long idBairro) {
        this.idBairro = idBairro;
    }   
}
