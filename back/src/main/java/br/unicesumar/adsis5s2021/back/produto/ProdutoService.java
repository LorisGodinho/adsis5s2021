package br.unicesumar.adsis5s2021.back.produto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProdutoService {
    @Autowired
    private ProdutoRepository repository;


    public Page<Produto> obterTodosPaginando(Pageable p, String termoDePesquisa) {        
        if (termoDePesquisa == null || termoDePesquisa.trim().length() == 0) {
            return repository.findAll(p);
        }
        return repository.findByDescricaoLike(p, '%'+termoDePesquisa+'%');
    }
/*
    public List<Produto> obterTodos(String termoDePesquisa) {
        if (termoDePesquisa == null || termoDePesquisa.trim().length() == 0) {
            return repository.findAll();
        }
        return repository.encontrarPelaDescrição(termoDePesquisa);
    }
*/    

    public Produto obterPeloId(String id) {
        return repository.findById(id).orElseGet(Produto::new);
    }

    public void excluirPeloId(String id) {
        repository.deleteById(id);
    }

    public Produto salvar(Produto produto) {
        return repository.save(produto);
    }

    public void gerarDadosTeste() {
        for (int i = 0; i < 10000; i++) {
            Produto novo = new Produto("Produto " + i, LocalDate.now(), new BigDecimal(i * 1.00));
            repository.save(novo);
        }
    }    
}
