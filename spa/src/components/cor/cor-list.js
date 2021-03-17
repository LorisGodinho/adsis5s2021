import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Menu from '../landing/menu';


const CorList = () => {
    const [cores, setCores] = useState([]);

    useEffect(()=> {
        getCoresFromServer();
    },[])

    const getCoresFromServer = async () => {
        const response = await axios.get("/api/cores");
        setCores(response.data);
    }

    const deleteCorFromServer = async (id) => {      
        if (!window.confirm("Você realmente quer excluir?")) {
            return;
        }  
        const response = await axios.delete(`/api/cores/${id}`);
        getCoresFromServer();
    }


    const linhasDaTabelaDinâmico = cores.map(elemento => {
        return (
            <tr key={elemento.id}>
                <td>{elemento.id}</td>
                <td>{elemento.sigla}</td>
                <td>{elemento.nome}</td>
                <td>
                    <button onClick={() => deleteCorFromServer(elemento.id)}>Excluir</button>
                    <Link to={`/cores/editar/${elemento.id}`}>
                        <button>Editar</button>
                    </Link>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <Menu></Menu>
            <h2>Listagem de Cores</h2>
            <hr></hr>
            <Link to="/cores/incluir">
                <button type="submit">Nova Cor</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>sigla</th>
                        <th>nome</th>
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

export default CorList;

    /*
    const cores = [
        { id: "1", sigla: "BLK", nome: "Black" },
        { id: "2", sigla: "BL", nome: "Blue" },
        { id: "3", sigla: "PNK", nome: "Pink" }
    ]
    */


    /*
        var linhasDaTabelaComLaçoNormal = [];
        for (var i = 0; i < cores.length; i++) {
            linhasDaTabelaComLaçoNormal.push(
                <tr key={cores[i].id}>
                <td>{cores[i].id}</td>
                <td>{cores[i].sigla}</td>
                <td>{cores[i].nome}</td>
            </tr>);
        }
    */
