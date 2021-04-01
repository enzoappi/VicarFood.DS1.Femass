package com.br.vicarfood.vicarfood.repository;

import com.br.vicarfood.vicarfood.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    
}
