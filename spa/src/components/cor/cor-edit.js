import React, { useState } from 'react';
import axios from 'axios';


const CorEdit = () => {
    const [cor, setCor] = useState({sigla: "", nome: ""});

    const doPost = async () => {
        const result = await axios.post("/api/cores", cor);
        alert("id:" + result.data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        doPost();
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        //console.log(name + "==>" + value);
        const novaCor = {...cor, [name]: value};
        setCor(novaCor);
        console.log(novaCor);
    }

    return (
        <div>
            <h2>Edição de Cor</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>

                <div>Sigla:
                    <input type="text" name="sigla" onChange={handleInputChange}></input>
                </div>

                <div>Nome:
                    <input type="text" name="nome" onChange={handleInputChange}></input>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}


export default CorEdit;