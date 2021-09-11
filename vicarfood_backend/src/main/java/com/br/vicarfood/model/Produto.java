package com.br.vicarfood.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProduto;
    private String nome;
    private Double preco;
    private String descricao;

    @Enumerated(EnumType.STRING)
    private Situacao situacao;

    @Column(columnDefinition = "TEXT")
    private String imagem;
    
    @Enumerated(EnumType.STRING)
    private TipoProduto tipoProduto;

    @OneToMany
    private List<Estoque> produtosEstoque;

    public TipoProduto getTipoProduto() {
        return tipoProduto;
    }

    public void setTipoProduto(TipoProduto tipoProduto) {
        this.tipoProduto = tipoProduto;
    }

    public Long getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(Long idProduto) {
        this.idProduto = idProduto;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Situacao getSituacao() {
        return situacao;
    }

    public void setSituacao(Situacao situacao) {
        this.situacao = situacao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
    
    @Override
    public String toString() {
        return nome;
    }
/*
    public List<ItemCompra> getItensCompras() {
        return itensCompra;
    }

    public void adicionarItens(Produto produto, Integer quantidadeProduto) {
        Boolean existe = false;
        for(ItemCompra iC : this.itensCompra) {
            if(produto.getIdProduto() == iC.getProduto().getIdProduto()) {
                existe = true;
            }
        }
        if(!existe) {
            ItemCompra iC = new ItemCompra();
            iC.setProduto(produto);
            iC.setQuantidadeProduto(quantidadeProduto);
            iC.calculoDeValorParcialItem();
            this.itensCompra.add(iC);
        }
    }
*/
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((idProduto == null) ? 0 : idProduto.hashCode());
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
        Produto other = (Produto) obj;
        if (idProduto == null) {
            if (other.idProduto != null)
                return false;
        } else if (!idProduto.equals(other.idProduto))
            return false;
        return true;
    }

    public List<Estoque> getProdutosEstoque() { //Arrumar esse metodo depois, para pegar so a quantidade existente no estoque
        return produtosEstoque;
    }    
}
