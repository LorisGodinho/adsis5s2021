import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CorEdit from './components/cor/cor-edit';
import CorList from './components/cor/cor-list';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProdutoList from './components/produto/produto-list';
import ProdutoEdit from './components/produto/produto-edit';
import LandingPage from './components/landing/landing-page';
import ManterProduto2 from './components/produto2/manter-produto2';
import TesteArthur from './components/testeArthur/teste-arthur';

function App() {
  var mensagens = "";
  for (let index = 0; index < 10; index++) {
    mensagens += "Ulha! ";
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/cores">
            <CorList></CorList>
          </Route>
          <Route exact path="/cores/incluir">
            <CorEdit></CorEdit>
          </Route>
          <Route path="/cores/editar/:idParaEditar">
            <CorEdit></CorEdit>
          </Route>

          <Route exact path="/produtos" component={ProdutoList}></Route>
          <Route path="/produtos/incluir" component={ProdutoEdit}></Route>
          <Route path="/produtos/editar/:idParaEditar" component={ProdutoEdit}></Route>

          <Route path="/produtos2" component={ManterProduto2}></Route>

          <Route exact path="/teste-arthur">
            <TesteArthur dataAtual={new Date()}></TesteArthur>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
