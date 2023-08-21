import { createContext, useContext, useState } from "react"


const ProductsContext = createContext()


export const useProducts = () => useContext(ProductsContext)
const PRODUCTS_URL = '/products.json'

const ContextProvider = ({ children }) => {
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
    const fetchProducts = () => {
        setLoading(true)
        fetch(PRODUCTS_URL).then(res => res.json())
            .then(data => {
                setProducts(data)
            }).catch(() => {
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
    }



    /* MODAL */
    const appendModal = (modal) => {
        setModals(prev => [...prev, modal])
        console.log('aew')
    }
    const deleteModal = () => setModals(prev => prev.slice(0, prev.length - 1))
    const deleteAllModals = () => setModals([])


    /* ALL DATA */
    const data = {
        products,
        cartProducts,
        favorites,
        error,
        loading,
        modals,
        toggleCart,
        toggleFavorite,
        fetchProducts,
        appendModal,
        deleteModal,
        deleteAllModals,

    }
    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )

}

export default ContextProvider