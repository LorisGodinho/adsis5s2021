import logo from './logo.svg';
import './App.css';
import CorEdit from './components/cor/cor-edit';
import CorList from './components/cor/cor-list';

function App() {
  var mensagens = "";
  for (let index = 0; index < 10; index++) {
    mensagens += "Ulha! ";
  }
  return (
    <div>
      {/* <CorEdit></CorEdit> */}
      <CorList></CorList>
    </div>
  );
}

export default App;
