package com.br.vicarfood.repository;

import java.util.List;

import com.br.vicarfood.model.Produto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    List<Produto> findByTipoProduto(String tipoProduto);
}
