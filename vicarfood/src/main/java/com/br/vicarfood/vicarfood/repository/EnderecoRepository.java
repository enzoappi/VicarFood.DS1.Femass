package com.br.vicarfood.vicarfood.repository;

import com.br.vicarfood.vicarfood.model.Endereco;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Integer>{
    
}
