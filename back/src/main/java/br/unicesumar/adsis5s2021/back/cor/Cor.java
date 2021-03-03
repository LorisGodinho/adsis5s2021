package br.unicesumar.adsis5s2021.back.cor;

import java.util.UUID;

public class Cor {
    private String id;
    private String sigla;
    private String nome;

    public Cor() {
        this.id = UUID.randomUUID().toString();
    }

    public Cor(String sigla, String nome) {
        this();
        this.sigla = sigla;
        this.nome = nome;
    }
    
    public String getId() {
        return id;
    }
    public String getSigla() {
        return sigla;
    }
    public String getNome() {
        return nome;
    }
    public void setSigla(String sigla) {
        this.sigla = sigla;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }    
}
