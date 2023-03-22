import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/context/CartContext'
import FormBuy from './components/FormBuy'

function App () {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path='/'
              element={<ItemListContainer greeting='Estos son los cursos disponibles de nuestro espacio' />}
            />

            <Route
              path='/cursos/categorias/:name'
              element={<ItemListContainer greeting='Estos son los cursos disponibles' />}
            />

            <Route
              path='/cursos/:id'
              element={<ItemDetailContainer />}
            />

            <Route
              path='/cart'
              element={<Cart />}
            />

            <Route
              path='/form'
              element={<FormBuy />}
            />

          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
