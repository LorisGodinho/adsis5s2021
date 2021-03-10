package br.unicesumar.adsis5s2021.back.produto;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProdutoService {
    @Autowired
    private ProdutoRepository repository;


    public List<Produto> obterTodos() {
        return repository.findAll();
    }

    public Produto obterPeloId(String id) {
        return repository.findById(id).orElseGet(Produto::new);
    }

    public void excluirPeloId(String id) {
        repository.deleteById(id);
    }

    public Produto salvar(Produto produto) {
        return repository.save(produto);
    }    
}
