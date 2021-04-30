package br.unicesumar.adsis5s2021.back.corTransiente;

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
@RequestMapping("/api/cores-transientes")
// @RequestMapping("/api/mycores")
public class CorControllerTransient {
    private List<Cor> cores = new ArrayList<>();


    public CorControllerTransient() {
        cores.add(new Cor("RX", "Roxo"));
        cores.add(new Cor("MRL", "Amarelo"));
    }
  
    @DeleteMapping("/{id}") 
    public void delete(@PathVariable("id") String id) {
        cores = cores.stream().filter(c -> !c.getId().equals(id)).collect(Collectors.toList());
    }
  
    @PutMapping("/{id}")
    public void post(@PathVariable("id") String id, @RequestBody Cor corEditada) {
        cores = cores.stream().filter(c -> !c.getId().equals(id)).collect(Collectors.toList());
        cores.add(corEditada);
    }


    @GetMapping("/{id}")
    public Cor getById(@PathVariable("id") String id) {
        return cores.stream()
            .filter(c -> c.getId().equals(id))
            .findFirst()
            .orElseGet(Cor::new);
    }

    @GetMapping
    public List<Cor> get() {
        return cores;
    }

    @PostMapping
    public String post(@RequestBody Cor nova) {
        System.out.println("Post: " 
            + " " + nova.getId() 
            + " " + nova.getNome() 
            + " " + nova.getSigla());
        this.cores.add(nova);
        return nova.getId();
    }

}
