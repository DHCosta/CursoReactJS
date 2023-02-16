import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <ItemListContainer greeting={"Hola! Estos son los cursos disponibles de nuestro espacio"}/>
        <ItemDetailContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
