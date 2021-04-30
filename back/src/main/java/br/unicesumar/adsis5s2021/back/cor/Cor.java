package br.unicesumar.adsis5s2021.back.cor;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.EqualsAndHashCode; 
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Cor {
    @EqualsAndHashCode.Include
    @Getter
    @Id
    private String id = UUID.randomUUID().toString();
    @Getter
    @Setter
    private String sigla;
    @Getter
    @Setter
    private String nome;
    
}
