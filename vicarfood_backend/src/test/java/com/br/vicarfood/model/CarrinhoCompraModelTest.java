package com.br.vicarfood.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CarrinhoCompraModelTest {
    Produto produto;
    Integer quantidadeProduto;
    CarrinhoCompra carrinhoCompra;
    Boolean finalizado;
    Double valorParcialTotalCompra;

    @BeforeEach
    void preenche() {
        produto = new Produto();
        produto.setNome("Batata de Calabresa");
        produto.setPreco(12.99);
        produto.setDescricao("calabresa, mussarela");
        
        quantidadeProduto = 3;
        finalizado = false;

        carrinhoCompra = new CarrinhoCompra();
        carrinhoCompra.setFinalizado(finalizado);
        carrinhoCompra.adicionarItensAoCarrinho(produto, quantidadeProduto);
        carrinhoCompra.setValorParcialTotalCompra();
    }

    @Test
    void preencherCarrinhoCompraTest() {
        Boolean finalizadoEsperado = false;
        Double valorParcialTotalCompraEsperado = 38.97;

        Boolean finalizadoAtual = carrinhoCompra.getFinalizado();
        Double valorParcialTotalCompraAtual = carrinhoCompra.getValorParcialTotalCompra();

        assertEquals(finalizadoEsperado, finalizadoAtual);
        assertEquals(valorParcialTotalCompraEsperado, valorParcialTotalCompraAtual);
    }
}
