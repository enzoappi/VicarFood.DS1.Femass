package com.br.vicarfood.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Estoque {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantidadeEstoque;

    @ManyToOne
    private TipoProdutoEstoque tipoProdutoEstoque;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantidadeEstoque() {
        return quantidadeEstoque;
    }

    public void setQuantidadeEstoque(Integer quantidadeEstoque) {
        this.quantidadeEstoque = quantidadeEstoque;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
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
        Estoque other = (Estoque) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

    public TipoProdutoEstoque getTipoProdutoEstoque() {
        return tipoProdutoEstoque;
    }

    public void setTipoProdutoEstoque(TipoProdutoEstoque tipoProdutoEstoque) {
        this.tipoProdutoEstoque = tipoProdutoEstoque;
    }

    @Override
    public String toString() {
        return "Estoque:" + quantidadeEstoque;
    }    
}
