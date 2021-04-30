import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import ProdutoEdit2 from './produto-edit2';
import ProdutoList2 from './produto-list2';

const ManterProduto2 = () => {
    const [statusPesquisa, setStatusPesquisa] = useState({ páginaAtual: 0, termoDePesquisa: "" });

    useEffect(() => {
        // console.log("[ManterProduto2] ==> useEffect[statusPesquisa] ");
        // console.log(statusPesquisa);
    },[statusPesquisa]);

    return (
        <Switch>
            <Route exact path="/produtos2">
                <ProdutoList2 statusPesquisa={statusPesquisa} setStatusPesquisa={setStatusPesquisa} ></ProdutoList2>
            </Route>
            <Route path="/produtos2/incluir" component={ProdutoEdit2}></Route>
            <Route path="/produtos2/editar/:idParaEditar" component={ProdutoEdit2}></Route>
        </Switch>
    )
}

export default ManterProduto2;