package com.br.vicarfood.vicarfood.model;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Compra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCompra;
    private LocalDate  dataCompra;
    private Double valorCompra;
    private Integer quantidadeProdutos;

    @Enumerated
    private SituacaoCompra situacaoCompra;
    
    @Enumerated(EnumType.STRING)
    private FormaPagamento formaPagamento;

    @OneToMany
    private List<ItemCompra> itensCompra;

    @ManyToOne
    private Cliente cliente;

    public Long getIdCompra() {
        return idCompra;
    }

    public void setIdCompra(Long idCompra) {
        this.idCompra = idCompra;
    }
    
    public LocalDate getDataCompra() {
        return dataCompra;
    }

    public void setDataCompra(LocalDate dataCompra) {
        this.dataCompra = dataCompra;
    }

    public Double getValorCompra() {
        return valorCompra;
    }

    public void setValorCompra(double valorCompra) {
        this.valorCompra = valorCompra;
    }

    public Integer getQuantidadeProdutos() {
        return quantidadeProdutos;
    }
        
    public void setQuantidadeProdutos(Integer quantidadeProdutos) {
        this.quantidadeProdutos = quantidadeProdutos;
    }
    
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((idCompra == null) ? 0 : idCompra.hashCode());
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
        Compra other = (Compra) obj;
        if (idCompra == null) {
            if (other.idCompra != null)
                return false;
        } else if (!idCompra.equals(other.idCompra))
            return false;
        return true;
    }  

    public FormaPagamento getFormaPagamento() {
        return formaPagamento;
    }
    public void setFormaPagamento(FormaPagamento formaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    public List<ItemCompra> getItensCompra() {
        return itensCompra;
    }

    public void setItensCompra(List<ItemCompra> itensCompra) {
        this.itensCompra = itensCompra;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public SituacaoCompra getSituacaoCompra() {
        return situacaoCompra;
    }

    public void setSituacaoCompra(SituacaoCompra situacaoCompra) {
        this.situacaoCompra = situacaoCompra;
    }
}
