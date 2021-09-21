package com.br.vicarfood.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ItemCompraTest {
    ItemCompra item;
    Integer qtd;
    Double valor;

    @BeforeEach
    void iniciar(){
        item = new ItemCompra();
        valor = 20.0;
        qtd = 3;
    }

    @Test
    public void pegarQuantidadeProdutoTest(){
        Double esperado = 60.0;
        Double atual = item.pegarQuantidadeProduto(qtd, valor);
        assertEquals(esperado, atual);

    }

}
