import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Menu from '../landing/menu';
import { Button, Modal, Table, Container, Row } from 'react-bootstrap';


const ProdutoList2 = (props) => {
    //const [statusPesquisa, setStatusPesquisa] = useState({ páginaAtual: 0, termoDePesquisa: "" });
    const { statusPesquisa, setStatusPesquisa } = props;
    const [produtos, setProdutos] = useState({ content: [], pageable: { pageNumber: 0 }, totalPages: 0 });
    const [idParaExcluir, setIdParaExcluir] = useState(null);

    useEffect(() => {
        console.log("ProdutoList >>> useEffect/getProdutosFromServer()");
        getProdutosFromServer(statusPesquisa.páginaAtual, statusPesquisa.termoDePesquisa);
    }, [])

    const handleCloseModalExclusão = () => setIdParaExcluir(null);
    const handleShowModalExclusão = (id) => setIdParaExcluir(id);

    const modalExclusão = () => {
        return (
            <Modal show={idParaExcluir !== null} onHide={handleCloseModalExclusão}>
                <Modal.Header closeButton>
                    <Modal.Title>Exclusão</Modal.Title>
                </Modal.Header>
                <Modal.Body>Confirma a exclusão deste produto?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalExclusão}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={() => { deleteProdutoFromServer(idParaExcluir) }}>
                        Excluir
              </Button>
                </Modal.Footer>
            </Modal>
        );
    }


    const getProdutosFromServer = async (páginaRequerida, termoDePesquisa) => {
        console.log(`getProdutosFromServer>> páginaRequerida=${páginaRequerida} e termoDePesquisa=[${termoDePesquisa}]`);
        const response = await axios.get(`/api/produtos?termoDePesquisa=${termoDePesquisa}&page=${páginaRequerida}`);

        const novoStatusPesquisa = { ...statusPesquisa, páginaAtual: response.data.pageable.pageNumber };
        setStatusPesquisa(novoStatusPesquisa);

        setProdutos(response.data);
    }

    const deleteProdutoFromServer = async (id) => {
        const response = await axios.delete(`/api/produtos/${id}`);
        setIdParaExcluir(null);
        console.log(`deleteProdutoFromServer>> páginaRequerida=${statusPesquisa.páginaAtual} e termoDePesquisa=[${statusPesquisa.termoDePesquisa}]`);
        if (produtos.content.length === 1) {
            getProdutosFromServer(statusPesquisa.páginaAtual - 1, statusPesquisa.termoDePesquisa);
        } else {
            getProdutosFromServer(statusPesquisa.páginaAtual, statusPesquisa.termoDePesquisa);
        }
    }


    const linhasDaTabelaDinâmico = produtos.content.map(elemento => {
        return (
            <tr key={elemento.id}>
                <td>{elemento.id}</td>
                <td>{elemento.descricao}</td>
                <td>{elemento.lancadoEm}</td>
                <td>{elemento.precoUnitario}</td>
                <td>
                    <Button variant="danger" onClick={() => handleShowModalExclusão(elemento.id)}>Excluir</Button>
                    <Link to={`/produtos2/editar/${elemento.id}`}>
                        <Button variant="primary">Editar</Button>
                    </Link>
                </td>
            </tr>
        );
    });

    const handleChangeTermoDePesquisa = (event) => {
        //setTermoDePesquisa(event.target.value);
        const novoStatusPesquisa = { ...statusPesquisa, termoDePesquisa: event.target.value };
        setStatusPesquisa(novoStatusPesquisa);
    }
    const handlePesquisar = () => {
        getProdutosFromServer(0, statusPesquisa.termoDePesquisa);
    }
    const handleLimpar = () => {
        const novoStatusPesquisa = { ...statusPesquisa, termoDePesquisa: "" };
        setStatusPesquisa(novoStatusPesquisa);
        getProdutosFromServer(0, "");
    }
    const handlePreviousPage = () => {
        if (produtos.pageable.pageNumber - 1 >= 0) {
            getProdutosFromServer(produtos.pageable.pageNumber - 1, statusPesquisa.termoDePesquisa);
        }
    }
    const handleNextPage = () => {
        if (produtos.pageable.pageNumber + 1 < produtos.totalPages) {
            getProdutosFromServer(produtos.pageable.pageNumber + 1, statusPesquisa.termoDePesquisa);
        }
    }


    return (
        <div>
            <Menu></Menu>
            {modalExclusão()}
            <h2>Listagem de Produtos</h2>
            <hr></hr>
            <Container>
                <Row>
                    <Link to="/produtos2/incluir">
                        <Button variant="success" type="submit">Novo Produto</Button>
                    </Link>
                    <div>
                        <Button onClick={handlePreviousPage}> {"<"} </Button>
                        {(produtos.pageable.pageNumber + 1) + "/" + produtos.totalPages}
                        <Button onClick={handleNextPage}> {">"} </Button>
                    </div>
                    <div>
                        <input onChange={handleChangeTermoDePesquisa} value={statusPesquisa.termoDePesquisa} type="text"></input>
                        <button variant="primary" onClick={handlePesquisar}>Pesquisar</button>
                        <button variant="primary" onClick={handleLimpar}>Limpar</button>
                    </div>
                </Row>
            </Container>
            <Table striped bordered hover>
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
            </Table>
        </div>
    )
}

export default ProdutoList2;

