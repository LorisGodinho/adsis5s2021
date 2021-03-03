package br.unicesumar.adsis5s2021.back.cor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cores")
// @RequestMapping("/api/mycores")
public class CorController {
    private List<Cor> cores = new ArrayList<>();


    public CorController() {
        cores.add(new Cor("RX", "Roxo"));
        cores.add(new Cor("MRL", "Amarelo"));
    }
 
    @DeleteMapping("/{id}") 
    public void delete(@PathVariable("id") String id) {
        cores = cores.stream().filter(c -> !c.getId().equals(id)).collect(Collectors.toList());
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
        return nova.getId();
    }

}
