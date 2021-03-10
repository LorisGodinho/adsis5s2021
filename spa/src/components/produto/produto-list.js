import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const ProdutoList = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(()=> {
        getProdutosFromServer();
    },[])

    const getProdutosFromServer = async () => {
        const response = await axios.get("/api/produtos");
        setProdutos(response.data);
    }

    const deleteProdutoFromServer = async (id) => {      
        if (!window.confirm("Você realmente quer excluir?")) {
            return;
        }  
        const response = await axios.delete(`/api/produtos/${id}`);
        getProdutosFromServer();
    }


    const linhasDaTabelaDinâmico = produtos.map(elemento => {
        return (
            <tr key={elemento.id}>
                <td>{elemento.id}</td>
                <td>{elemento.descricao}</td>
                <td>{elemento.lancadoEm}</td>
                <td>{elemento.precoUnitario}</td>
                <td>
                    <button onClick={() => deleteProdutoFromServer(elemento.id)}>Excluir</button>
                    <Link to={`/produtos/editar/${elemento.id}`}>
                        <button>Editar</button>
                    </Link>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Listagem de Produtos</h2>
            <hr></hr>
            <Link to="/produtos/editar">
                <button type="submit">Novo Produto</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>descricao</th>
                        <th>Lançado Em</th>
                        <th>Preço Unitário</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {linhasDaTabelaDinâmico}
                </tbody>
            </table>
        </div>
    )
}

export default ProdutoList;
