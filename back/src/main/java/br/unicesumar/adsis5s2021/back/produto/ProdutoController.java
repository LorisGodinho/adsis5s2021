package br.unicesumar.adsis5s2021.back.produto;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
    @Autowired
    private ProdutoService service;
 
    @DeleteMapping("/{id}") 
    public void delete(@PathVariable("id") String id) {
        service.excluirPeloId(id);
    }
  
    @PutMapping("/{id}")
    public void put(@PathVariable("id") String id, @RequestBody Produto produtoEditado) {
        service.salvar(produtoEditado);
    }


    @GetMapping("/{id}")
    public Produto getById(@PathVariable("id") String id) {
        return service.obterPeloId(id);
    }

    @GetMapping
    public List<Produto> get() {
        return service.obterTodos();
    }

    @PostMapping
    public String post(@RequestBody Produto novo) {
        service.salvar(novo);
        return novo.getId();
    }

}
