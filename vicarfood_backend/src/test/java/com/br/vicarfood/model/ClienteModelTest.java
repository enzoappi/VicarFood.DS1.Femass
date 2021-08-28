package com.br.vicarfood.model;

import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ClienteModelTest {
    Cliente cliente;
    String nomeCliente;
    String cpf;
    String telefone;

    @BeforeEach
    void preenche(){
        cliente = new Cliente();
        nomeCliente = "Lucca Raul Roberto Gomes";
        cpf = "681.436.135-34";
        telefone = "(21) 98657-0183";
    }
    //Testa se o cliente foi montado corretamente
    @Test
    public void pegarDadosClienteTest() {
        String nomeEsperado = "Lucca Raul Roberto Gomes";
        String cpfEsperado = "681.436.135-34";
        String telefoneEsperado = "(21) 98657-0183";

        String atualNome = cliente.setNomeCliente(nomeCliente);
        String atualCPF = cliente.setCpf(cpf);
        String atualTelefone = cliente.setTelefone(telefone);        
        
        assertEquals(nomeEsperado, atualNome);
        assertEquals(cpfEsperado, atualCPF);
        assertEquals(telefoneEsperado, atualTelefone);
    }

    
}


