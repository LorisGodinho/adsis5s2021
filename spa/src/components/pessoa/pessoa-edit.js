import React, { useState, useEffect } from 'react';

function PessoaEdit() {
    const [pessoa, setPessoa] = useState({nome: "", altura:0, idade:0});
    const [pessoaSalva, setPessoaSalva] = useState(false);

    useEffect(() => {
        console.log(pessoa);
    });

    const handleSalvar = (event) => {
        setPessoaSalva(true);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleChange = (event) => {
        //console.log(event.target.name + "==>" + event.target.value);
        const novoPessoa = {...pessoa, [event.target.name]: event.target.value}
        setPessoa(novoPessoa);        
    }
    const renderPessoaSalva = () => {
        if (pessoaSalva) {
            return (
                <div>{pessoa.nome} {pessoa.altura} {pessoa.idade}</div> 
            )
        }
        return (<div></div>);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edição de Pessoa</h2>
                <hr></hr>
                <div>Nome:<input type="text" name="nome" onChange={handleChange}></input></div>
                <div>Altura:<input type="text" name="altura" onChange={handleChange}></input></div>
                <div>Idade:<input type="text" name="idade" onChange={handleChange}></input></div>
                <button onClick={handleSalvar}>Salvar</button>
            </form>
            {renderPessoaSalva()}
        </div>
    );
}

export default PessoaEdit;