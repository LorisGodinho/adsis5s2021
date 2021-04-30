package br.unicesumar.adsis5s2021.back.cor;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CorService {
    @Autowired
    private CorRepository repository;


    public Page<Cor> obterTodosPaginando(Pageable p, String termoDePesquisa) {        
        if (termoDePesquisa == null || termoDePesquisa.trim().length() == 0) {
            return repository.findAll(p);
        }
        return repository.findByNomeLike(p, '%'+termoDePesquisa+'%');
    }

    public Cor obterPeloId(String id) {
        return repository.findById(id).orElseGet(Cor::new);
    }

    public void excluirPeloId(String id) {
        repository.deleteById(id);
    }

    public Cor salvar(Cor cor) {
        return repository.save(cor);
    }
}
