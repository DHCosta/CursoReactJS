import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Hola! Estos son los cursos disponibles de nuestro espacio"}/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
