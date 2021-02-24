package br.unicesumar.adsis5s2021.back.cor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cores")
// @RequestMapping("/api/mycores")
public class CorController {

    @PostMapping
    public String post(@RequestBody Cor nova) {
        System.out.println("Post: " 
            + " " + nova.getId() 
            + " " + nova.getNome() 
            + " " + nova.getSigla());
        return nova.getId();
    }

}
