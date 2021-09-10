package com.br.vicarfood.repository;

import java.util.Optional;

import com.br.vicarfood.model.CarrinhoCompra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarrinhoCompraRepository extends JpaRepository<CarrinhoCompra, Long>{
    public Optional<CarrinhoCompra> findByFinalizado(Boolean finalizado);
}
