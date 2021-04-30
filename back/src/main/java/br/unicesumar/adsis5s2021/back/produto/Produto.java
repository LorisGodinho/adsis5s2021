package br.unicesumar.adsis5s2021.back.produto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import br.unicesumar.adsis5s2021.back.cor.Cor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Produto {
    @EqualsAndHashCode.Include
    @Getter
    @Id
    private String id = UUID.randomUUID().toString();
    @Getter
    @Setter
    private String descricao;
    @Getter
    @Setter
    private LocalDate lancadoEm;
    @Getter
    @Setter
    @Column(precision = 15, scale = 2)
    private BigDecimal precoUnitario;    

    @Getter
    @Setter
    @ManyToOne
    private Cor corPadrao;


    public Produto(String descricao, LocalDate lancadoEm, BigDecimal precoUnitario) {        
        this.descricao = descricao;
        this.lancadoEm = lancadoEm;
        this.precoUnitario = precoUnitario;
    }

    
}
