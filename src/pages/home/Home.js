import ProductsList from 'components/products-list/ProductsList'
import { useProducts } from 'context/ContextProvider'

import React, { useEffect } from 'react'


const Home = () => {
    const { products, fetchProducts } = useProducts()
    



    useEffect(() => {
        fetchProducts()
    }, [])



    return (
        <>
            <ProductsList
                itemList={products}
            />
        </>
    )
}

export default Home
