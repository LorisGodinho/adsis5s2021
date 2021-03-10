package br.unicesumar.adsis5s2021.back.meu.livro;

import java.util.UUID;

public class MeuLivro {
    private String id;
    private String titulo;
    private String autor;
    private int quantidadeDePaginas;

    public MeuLivro(String titulo, String autor, int quantidadeDePaginas) {
        this();
        this.titulo = titulo;
        this.autor = autor;
        this.quantidadeDePaginas = quantidadeDePaginas;
    }
    
    public MeuLivro() {
        this.id = UUID.randomUUID().toString();
    }

    public String getId() {
        return id;
    }
    public String getTitulo() {
        return titulo;
    }
    public String getAutor() {
        return autor;
    }
    public int getQuantidadeDePaginas() {
        return quantidadeDePaginas;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public void setQuantidadeDePaginas(int quantidadeDePaginas) {
        this.quantidadeDePaginas = quantidadeDePaginas;
    }
}
