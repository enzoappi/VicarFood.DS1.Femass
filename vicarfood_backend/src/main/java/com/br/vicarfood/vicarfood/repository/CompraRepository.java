package com.br.vicarfood.vicarfood.repository;

import com.br.vicarfood.vicarfood.model.Compra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Long>{
    
}
