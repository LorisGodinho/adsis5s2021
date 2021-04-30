import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import { AsyncTypeahead as Typeahead } from 'react-bootstrap-typeahead';


const ProdutoEdit2 = () => {
    const history = useHistory();
    const { idParaEditar } = useParams();
    const emModoDeEdição = idParaEditar !== undefined;
    const [produto, setProduto] = useState({ descricao: "", lancadoEm: "", precoUnitario: 0.00 });
    const [isLoading, setIsLoading] = useState(false);
    const [corSelecionada, setCorSelecionada] = useState([{id:"", nome:""}]);
    const [coresPesquisadas, setCoresPesquisadas] = useState([]);

    const doGetById = async () => {
        const result = await axios.get(`/api/produtos/${idParaEditar}`);
        setProduto(result.data);
        console.log(result.data);
    }

    useEffect(() => {
        if (emModoDeEdição) {
            doGetById();
        }
    }, []);

    const doPost = async () => {
        const result = await axios.post("/api/produtos", produto);
        history.push("/produtos2");
    }

    const doPut = async () => {
        const result = await axios.put(`/api/produtos/${idParaEditar}`, produto);
        history.push("/produtos2");
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
        const novaCor = { ...produto, [name]: value };
        setProduto(novaCor);
        console.log(novaCor);
    }

    const searchCores = async (termoDePesquisa) => {
        console.log("searchCores>>> " + termoDePesquisa) 
        setIsLoading(true);

        const response = await axios.get(`/api/cores?termoDePesquisa=${termoDePesquisa}`);
        setCoresPesquisadas(response.data.content);       

        setIsLoading(false);
    }

    useEffect(() => {
        if (corSelecionada[0]) {
            console.log("Selecionada cor: " + corSelecionada[0].id + " " + corSelecionada[0].nome)
        }
    },[corSelecionada]);

    const testarSeleção = (selecionada) => {
        console.log(selecionada);
    }
    
    return (
        <div>
            <h2>{emModoDeEdição ? "Edição de Produto" : "Inclusão de Produto"}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>

                <div>Descrição:
                    <input type="text" name="descricao" value={produto.descricao} onChange={handleInputChange}></input>
                </div>

                <div>Lançado em:
                    <input type="date" name="lancadoEm" value={produto.lancadoEm} onChange={handleInputChange}></input>
                </div>

                <div>Preço unitário:
                    <input type="text" name="precoUnitario" value={produto.precoUnitario} onChange={handleInputChange}></input>
                </div>
                <div>
                    <Typeahead
                        id="typeahead-cor-padrão"
                        filterBy={() => true}
                        isLoading={isLoading}
                        labelKey="nome"
                        multiple={false}
                        onSearch={searchCores}
                        onChange={setCorSelecionada}
                        options={coresPesquisadas}
                        selected={corSelecionada}
                    />

                </div>

                <button type="submit">Enviar</button>
                <Link to="/produtos2">Voltar</Link>
            </form>
        </div>
    );
}


export default ProdutoEdit2;