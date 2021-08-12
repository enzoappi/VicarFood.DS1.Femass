package com.br.vicarfood.repository;

import java.util.List;

import com.br.vicarfood.model.Produto;
import com.br.vicarfood.model.TipoProduto;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface ProdutoRepository extends JpaRepository<Produto, String> {
    List<Produto> findByTipoProduto(TipoProduto tipoProduto);

    //@Query("SELECT p FROM Produto p WHERE p.tipoProduto = :tipoProduto")
    //List<Produto> findByFiltroTipoProduto(@Param("tipoProduto") TipoProduto tipoProduto);
}
