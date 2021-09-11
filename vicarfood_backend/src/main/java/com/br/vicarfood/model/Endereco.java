package com.br.vicarfood.model;

import javax.persistence.*;


@Entity
public class Endereco {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEndereco;
    private String logradouro;
    private String bairro;
    private String cidade;
    private String uf;
    private Double cep;
    private String numero;
    private String complemento;
    private String pontoDeReferencia;

    
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
    public String getBairro() {
        return bairro;
    }
    public void setBairro(String bairro) {
        this.bairro = bairro;
    }
    public String getCidade() {
        return cidade;
    }
    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
    public String getUf() {
        return uf;
    }
    public void setUf(String uf) {
        this.uf = uf;
    }
    public Double getCep() {
        return cep;
    }
    public void setCep(Double cep) {
        this.cep = cep;
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
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((bairro == null) ? 0 : bairro.hashCode());
        result = prime * result + ((cep == null) ? 0 : cep.hashCode());
        result = prime * result + ((cidade == null) ? 0 : cidade.hashCode());
        result = prime * result + ((complemento == null) ? 0 : complemento.hashCode());
        result = prime * result + ((idEndereco == null) ? 0 : idEndereco.hashCode());
        result = prime * result + ((logradouro == null) ? 0 : logradouro.hashCode());
        result = prime * result + ((numero == null) ? 0 : numero.hashCode());
        result = prime * result + ((pontoDeReferencia == null) ? 0 : pontoDeReferencia.hashCode());
        result = prime * result + ((uf == null) ? 0 : uf.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Endereco other = (Endereco) obj;
        if (bairro == null) {
            if (other.bairro != null)
                return false;
        } else if (!bairro.equals(other.bairro))
            return false;
        if (cep == null) {
            if (other.cep != null)
                return false;
        } else if (!cep.equals(other.cep))
            return false;
        if (cidade == null) {
            if (other.cidade != null)
                return false;
        } else if (!cidade.equals(other.cidade))
            return false;
        if (complemento == null) {
            if (other.complemento != null)
                return false;
        } else if (!complemento.equals(other.complemento))
            return false;
        if (idEndereco == null) {
            if (other.idEndereco != null)
                return false;
        } else if (!idEndereco.equals(other.idEndereco))
            return false;
        if (logradouro == null) {
            if (other.logradouro != null)
                return false;
        } else if (!logradouro.equals(other.logradouro))
            return false;
        if (numero == null) {
            if (other.numero != null)
                return false;
        } else if (!numero.equals(other.numero))
            return false;
        if (pontoDeReferencia == null) {
            if (other.pontoDeReferencia != null)
                return false;
        } else if (!pontoDeReferencia.equals(other.pontoDeReferencia))
            return false;
        if (uf == null) {
            if (other.uf != null)
                return false;
        } else if (!uf.equals(other.uf))
            return false;
        return true;
    }
    @Override
    public String toString() {
        return "Endereco [bairro=" + bairro + ", cep=" + cep + ", cidade=" + cidade + ", complemento=" + complemento
                + ", idEndereco=" + idEndereco + ", logradouro=" + logradouro + ", numero=" + numero
                + ", pontoDeReferencia=" + pontoDeReferencia + ", uf=" + uf + "]";
    }


    private Double txEntrega(){
                 
        if(this.cep>=27910000 || this.cep<= 27919999){
            Double valor = 10.00;
            return valor;
        }
        else if(this.cep>=27920000 || this.cep<= 27924999){
            Double valor = 6.00;
            return valor;
        }
        else if(this.cep>=27925000 || this.cep<= 27930999){
            Double valor = 3.00;
            return valor;
        }
        else if(this.cep>=27931000 || this.cep<= 27943999){
            Double valor = 8.00;
            return valor;
        }
        else if(this.cep>=27944000 || this.cep<= 27946070){
            Double valor = 10.00;
            return valor;
        }
        else{
            //fazer exception no front com msg "Não entregamos nesse endereço"
            Double valor = 0.00;
            return valor;    
        }
        
     }


}
