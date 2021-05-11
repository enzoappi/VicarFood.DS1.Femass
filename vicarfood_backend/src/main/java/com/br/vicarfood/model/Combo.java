package com.br.vicarfood.model;

import java.util.List;

import javax.persistence.OneToMany;

public class Combo extends Produto {
    @OneToMany
    public List<Produto> produtos;

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(Produto produto) {
        this.produtos.add(produto);
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((produtos == null) ? 0 : produtos.hashCode());
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
        Combo other = (Combo) obj;
        if (produtos == null) {
            if (other.produtos != null)
                return false;
        } else if (!produtos.equals(other.produtos))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Combo [produtos=" + produtos + "]";
    }

}
