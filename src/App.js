
import Cart from "pages/cart/Cart";
import Favorites from "pages/favorites/Favorites";
import Home from "pages/home/Home";
import MainLayout from "pages/main-layout/MainLayout";
import React, { useCallback, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const PRODUCTS_URL = '/products.json'

const App = () => {

  const cart = JSON.parse(window['localStorage'].getItem('products')) || []
  const favs = JSON.parse(window['localStorage'].getItem('favorites')) || []
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [cartProducts, setCartProducts] = useState(cart)
  const [favorites, setFavorites] = useState(favs)
  const [modals, setModals] = useState([])

  /* PRODUCTS */
  const toggleCart = (product) => {
    setCartProducts(prev => product.isAdded ? [...prev, product] : prev.filter(cp => cp.id !== product.id))
  }
  const toggleFavorite = (product) => {
    setFavorites(prev => product.isFavorite ? [...prev, product] : prev.filter(f => f.id !== product.id))
  }
  const fetchProducts = useCallback(() => {
    setLoading(true)
    fetch(PRODUCTS_URL).then(res => res.json())
      .then(data => {
        setProducts(data)
      }).catch(() => {
        setError(true)
      }).finally(() => {
        setLoading(false)
      })
  }, [])



  /* MODAL */
  const appendModal = (modal) => {
    setModals(prev => [...prev, modal])

  }
  const deleteModal = () => setModals(prev => prev.slice(0, prev.length - 1))


  /* ROUTER */

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout modals={modals} favorites={favorites} cartProducts={cartProducts} />,
      children: [
        {
          path: '',
          element: <Home
            cartProducts={cartProducts}
            error={error}
            favorites={favorites}
            fetchProducts={fetchProducts}
            loading={loading}
            products={products}
            appendModal={appendModal}
            deleteModal={deleteModal}
            toggleCart={toggleCart}
            toggleFavorite={toggleFavorite}
          />
        },
        {
          path: 'cart',
          element: <Cart
            products={cartProducts}
            cartProducts={cartProducts}
            error={error}
            favorites={favorites}
            loading={loading}
            toggleFavorite={toggleFavorite}
            toggleCart={toggleCart}
            appendModal={appendModal}
            deleteModal={deleteModal} 
          />
        },
        {
          path: 'favorites',
          element: <Favorites 
            products={favorites}
            cartProducts={cartProducts}
            error={error}
            favorites={favorites}
            loading={loading}
            toggleFavorite={toggleFavorite}
            toggleCart={toggleCart}
            appendModal={appendModal}
            deleteModal={deleteModal} 
          />
        }
      ]
    }
  ])


  return <RouterProvider router={appRouter} />
}


export default App;
