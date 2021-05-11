package com.br.vicarfood.repository;

import com.br.vicarfood.model.Compra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Long>{
    
}
