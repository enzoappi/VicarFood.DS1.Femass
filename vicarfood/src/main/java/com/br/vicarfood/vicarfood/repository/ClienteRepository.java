package com.br.vicarfood.vicarfood.repository;

import com.br.vicarfood.vicarfood.model.Cliente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, String>{
    Cliente findByTelefone(String telefone);
}
