package com.br.vicarfood.vicarfood.model;

import javax.persistence.Entity;

@Entity
public class ItemCompra {
    private int quantidadeProduto;

    public int getQuantidadeProduto() {
        return quantidadeProduto;
    }

    public void setQuantidadeProduto(int quantidadeProduto) {
        this.quantidadeProduto = quantidadeProduto;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + quantidadeProduto;
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
        ItemCompra other = (ItemCompra) obj;
        if (quantidadeProduto != other.quantidadeProduto)
            return false;
        return true;
    }

    
}
