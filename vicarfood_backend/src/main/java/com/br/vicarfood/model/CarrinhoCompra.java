package com.br.vicarfood.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class CarrinhoCompra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCarrinhoCompra;
    private Boolean finalizado = false;
    private Double valorParcialTotalCompra;

    @OneToMany(cascade = CascadeType.ALL)
    private List<ItemCompra> itensCompra;

    public CarrinhoCompra() {
        this.itensCompra = new ArrayList<ItemCompra>();
    }

    public Long getIdCarrinhoCompra() {
        return idCarrinhoCompra;
    }

    public void setIdCarrinhoCompra(Long idCarrinhoCompra) {
        this.idCarrinhoCompra = idCarrinhoCompra;
    }

    public void setValorParcialTotalCompra() {
        Double valor = 0.0;
        for(ItemCompra iC : itensCompra) {
            valor += iC.getValorParcialItem();
        }
        this.valorParcialTotalCompra = valor;
    }

    public Double getValorParcialTotalCompra() {
        return this.valorParcialTotalCompra;
    }

    public List<ItemCompra> getItensCompra() {
        return itensCompra;
    }

    public void adicionarItensAoCarrinho(Produto produto, Integer quantidade) {
        ItemCompra itemCompra = new ItemCompra();
        itemCompra.setProduto(produto);
        itemCompra.setQuantidadeProduto(quantidade);
        this.itensCompra.add(itemCompra);
    }  
    
    public Boolean getFinalizado() {
        return finalizado;
    }

    public void setFinalizado(Boolean finalizado) {
        this.finalizado = finalizado;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((idCarrinhoCompra == null) ? 0 : idCarrinhoCompra.hashCode());
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
        CarrinhoCompra other = (CarrinhoCompra) obj;
        if (idCarrinhoCompra == null) {
            if (other.idCarrinhoCompra != null)
                return false;
        } else if (!idCarrinhoCompra.equals(other.idCarrinhoCompra))
            return false;
        return true;
    }

}
