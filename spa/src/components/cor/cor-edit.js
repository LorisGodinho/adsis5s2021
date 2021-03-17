import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';


const CorEdit = () => {
    const history = useHistory();
    const { idParaEditar } = useParams();
    const emModoDeEdição = idParaEditar !== undefined;
    const [cor, setCor] = useState({ sigla: "", nome: "" });


    const doGetById = async () => {
        const result = await axios.get(`/api/cores/${idParaEditar}`);
        setCor(result.data);
        console.log(result.data);
    }

    useEffect(() => {
        if (emModoDeEdição) {
            doGetById();
        }
    },[]);

    const doPost = async () => {
        const result = await axios.post("/api/cores", cor);
        history.push("/cores");
    }

    const doPut = async () => {
        const result = await axios.put(`/api/cores/${idParaEditar}`, cor);
        history.push("/cores");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (emModoDeEdição) {
            doPut();
        } else {
            doPost();
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        //console.log(name + "==>" + value);
        const novaCor = { ...cor, [name]: value };
        setCor(novaCor);
        console.log(novaCor);
    }

    console.log(idParaEditar);
    return (
        <div>
            <h2>{emModoDeEdição ? "Edição de Cor" : "Inclusão de Cor"}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>

                <div>Sigla:
                    <input type="text" name="sigla" value={cor.sigla} onChange={handleInputChange}></input>
                </div>

                <div>Nome:
                    <input type="text" name="nome" value={cor.nome} onChange={handleInputChange}></input>
                </div>

                <button type="submit">Enviar</button>
                <Link to="/cores">Voltar</Link>
            </form>
        </div>
    );
}


export default CorEdit;