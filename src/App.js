import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Hola! Estos son los cursos disponibles de nuestro espacio"}/>
    </>
  );
}

export default App;
