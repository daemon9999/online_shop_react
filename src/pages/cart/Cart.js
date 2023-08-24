
import ProductsList from 'components/products-list/ProductsList'

import React from 'react'

import PropTypes from 'prop-types'
const Cart = ({ cartProducts, error, favorites, loading, toggleFavorite, toggleCart, appendModal, deleteModal }) => {



  return (
    <>

      <ProductsList
        itemList={cartProducts}
        cartProducts={cartProducts}
        error={error}
        favorites={favorites}
        loading={loading}
        toggleFavorite={toggleFavorite}
        toggleCart={toggleCart}
        appendModal={appendModal}
        deleteModal={deleteModal}
      />

    </>
  )
}

export default Cart


Cart.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  favorites: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired,
  appendModal: PropTypes.func.isRequired,
  deleteModal: PropTypes.func.isRequired
}