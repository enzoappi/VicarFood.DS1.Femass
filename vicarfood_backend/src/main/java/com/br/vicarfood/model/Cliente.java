package com.br.vicarfood.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Cliente {

    @Id
    private String cpf;
    private String nomeCliente;
    private String telefone;

    @OneToOne 
    private Endereco endereco;


    public String getCpf() {
        return cpf;
    }

    public String setCpf(String cpf) {
        return this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public String setTelefone(String telefone) {
        return this.telefone = telefone;
    }

    public String getNomeCliente() {
        return this.nomeCliente;
    }

    public String setNomeCliente(String nomeCliente) {
        return this.nomeCliente = nomeCliente;
    }

    @Override
    public String toString() {
        return nomeCliente;
    }  

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((cpf == null) ? 0 : cpf.hashCode());
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
        Cliente other = (Cliente) obj;
        if (cpf == null) {
            if (other.cpf != null)
                return false;
        } else if (!cpf.equals(other.cpf))
            return false;
        return true;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

}
