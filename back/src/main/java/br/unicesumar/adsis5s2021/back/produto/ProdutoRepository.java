package br.unicesumar.adsis5s2021.back.produto;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProdutoRepository extends JpaRepository<Produto, String>{

    @Query("select p from Produto p where p.descricao like %:termoDePesquisa%")
    List<Produto> encontrarPelaDescrição(String termoDePesquisa);

    Page<Produto> findByDescricaoLike(Pageable p, String descricao);
    
}
