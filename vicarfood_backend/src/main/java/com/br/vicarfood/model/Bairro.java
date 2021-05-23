package com.br.vicarfood.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Bairro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @Override
    public String toString() {
        return nomeBairro + ", R$" + valor;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((idBairro == null) ? 0 : idBairro.hashCode());
        result = prime * result + ((nomeBairro == null) ? 0 : nomeBairro.hashCode());
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
        Bairro other = (Bairro) obj;
        if (idBairro == null) {
            if (other.idBairro != null)
                return false;
        } else if (!idBairro.equals(other.idBairro))
            return false;
        if (nomeBairro == null) {
            if (other.nomeBairro != null)
                return false;
        } else if (!nomeBairro.equals(other.nomeBairro))
            return false;
        return true;
    }
}
