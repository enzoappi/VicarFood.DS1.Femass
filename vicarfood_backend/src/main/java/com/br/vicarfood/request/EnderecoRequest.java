package com.br.vicarfood.request;

public class EnderecoRequest {
    private Long idEndereco;
    private Double cep;
    private String logradouro;
    private String numero;
    private String complemento;
    private String pontoDeReferencia;
    private String Bairro;    
   

    public Long getIdEndereco() {
        return idEndereco;
    }

    public Double getCep() {
        return cep;
    }

    public void setCep(Double cep) {
        this.cep = cep;
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

    public String getBairro() {
        return Bairro;
    }

    public void setBairro(String Bairro) {
        this.Bairro = Bairro;
    }


}
