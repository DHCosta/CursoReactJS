import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" 
            element={<ItemListContainer 
            greeting={"Hola! Estos son los cursos disponibles de nuestro espacio"} />} />

          <Route
            path="/categorias/:name"
            element={<ItemListContainer />}
          />

          <Route
            path="/cursos/:id"
            element={<ItemDetailContainer />}
          />

          <Route path="/cart" />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
