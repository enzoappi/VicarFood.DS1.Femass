package com.br.vicarfood.repository;

import com.br.vicarfood.model.ItemCompra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemCompraRepository extends JpaRepository<ItemCompra, Long>{
}
