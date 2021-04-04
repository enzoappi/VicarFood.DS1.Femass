package com.br.vicarfood.vicarfood.repository;

import com.br.vicarfood.vicarfood.model.Bairro;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BairroRepository extends JpaRepository<Bairro, Long>{
    
}
