package br.unicesumar.adsis5s2021.back.cor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cores")
public class CorController {
    @Autowired
    private CorService service;
 
    @DeleteMapping("/{id}") 
    public void delete(@PathVariable("id") String id) {
        service.excluirPeloId(id);
    }
  
    @PutMapping("/{id}")
    public void put(@PathVariable("id") String id, @RequestBody Cor corEditada) {
        service.salvar(corEditada);
    }


    @GetMapping("/{id}")
    public Cor getById(@PathVariable("id") String id) {
        return service.obterPeloId(id);
    }

    @GetMapping
    public Page<Cor> get(Pageable p, @RequestParam(name = "termoDePesquisa", required = false) String termoDePesquisa) {
        return service.obterTodosPaginando(p, termoDePesquisa);
    }

    @PostMapping
    public String post(@RequestBody Cor nova) {
        service.salvar(nova);
        return nova.getId();
    }

}
