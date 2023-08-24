import React, { useEffect } from "react";
import styles from "./ProductsList.module.scss"
import Product from "components/product/Product";

import Loader from "components/loader/Loader";
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";
import NotAvailable from "components/not-available/NotAvailable";



const ProductsList = ({ itemList, cartProducts, favorites, loading, error, appendModal, deleteModal, toggleCart, toggleFavorite }) => {


    const location = useLocation()


    useEffect(() => {
        cartProducts.length > 0 ? window['localStorage'].setItem('products', JSON.stringify(cartProducts)) :
            window['localStorage'].removeItem('products')
    }, [cartProducts])

    useEffect(() => {
        favorites.length > 0 ? window['localStorage'].setItem('favorites', JSON.stringify(favorites)) :
            window['localStorage'].removeItem('favorites')
    }, [favorites])



    return (
        <main className={styles.products}>
            {(!!loading && location.pathname === '/') && (<Loader />)}
            {(itemList.length === 0 && location.pathname !== '/') && (
                <NotAvailable type={location.pathname === '/cart' ? 'cart' : location.pathname === '/favorites' ? 'favorite' : ''} />
            )}
            {itemList.length > 0 && (
                <div className={`container ${styles['products__container']}`}>
                    {itemList.map((item) => (
                        <Product

                            appendModal={appendModal}
                            deleteModal={deleteModal}
                            cartProducts={cartProducts}
                            favorites={favorites}
                            toggleCart={toggleCart}
                            toggleFavorite={toggleFavorite}
                            product={item}
                            key={item.id}
                        />
                    ))}

                </div>)}

            {error && (<NotAvailable text="Failed to fetch products" />)}


        </main>
    )


}

export default ProductsList


ProductsList.propTypes = {
    itemList: PropTypes.array.isRequired,

    cartProducts: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    favorites: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    toggleCart: PropTypes.func.isRequired,
    appendModal: PropTypes.func.isRequired,
    deleteModal: PropTypes.func.isRequired

}