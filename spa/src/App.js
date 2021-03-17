import logo from './logo.svg';
import './App.css';
import CorEdit from './components/cor/cor-edit';
import CorList from './components/cor/cor-list';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProdutoList from './components/produto/produto-list';
import ProdutoEdit from './components/produto/produto-edit';
import LandingPage from './components/landing/landing-page';

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
          <Route exact path="/produtos">
            <ProdutoList></ProdutoList>
          </Route>
          <Route exact path="/produtos/incluir">
            <ProdutoEdit></ProdutoEdit>
          </Route>
          <Route path="/produtos/editar/:idParaEditar">
            <ProdutoEdit></ProdutoEdit>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
