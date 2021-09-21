package com.br.vicarfood.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;

public class ProdutoModelTest {
    Produto produto;
    Double n1;
    Double n2;

    @BeforeEach
    void iniciar(){
        produto = new Produto();
        n1=1.0;
        n2=18.0;
    }

    @Test
    void calcularPrecoTest(){
        Double esperado = 18.0;
        Double atual = produto.calcularPreco(n1, n2);
        assertEquals(esperado, atual);
    }

}
