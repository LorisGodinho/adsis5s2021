package br.unicesumar.adsis5s2021.back.meu.livro;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/meuslivros")
public class MeuLivroController {
    private List<MeuLivro> livros = new ArrayList<>();


    public MeuLivroController() {
        livros.add(new MeuLivro("Big Java", "Horstmann", 455));
        livros.add(new MeuLivro("Refactoring", "Fowler", 278));
    }
  
    @DeleteMapping("/{id}") 
    public void delete(@PathVariable("id") String id) {
        livros = livros.stream().filter(c -> !c.getId().equals(id)).collect(Collectors.toList());
    }
  
    @PutMapping("/{id}")
    public void post(@PathVariable("id") String id, @RequestBody MeuLivro livroEditado) {
        livros = livros.stream().filter(c -> !c.getId().equals(id)).collect(Collectors.toList());
        livros.add(livroEditado);
    }


    @GetMapping("/{id}")
    public MeuLivro getById(@PathVariable("id") String id) {
        return livros.stream()
            .filter(c -> c.getId().equals(id))
            .findFirst()
            .orElseGet(MeuLivro::new);
    }

    @GetMapping
    public List<MeuLivro> get() {
        return livros;
    }

    @PostMapping
    public String post(@RequestBody MeuLivro novo) {
        this.livros.add(novo);
        return novo.getId();
    }

}
