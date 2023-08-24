import React, { useEffect } from 'react'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

import { Outlet, useLocation } from 'react-router-dom'

import Modal from 'components/modal/Modal'

import PropTypes from 'prop-types';

const MainLayout = ({ modals, favorites, cartProducts }) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <>
      {modals.length > 0 && modals.map((modal, index) => {
        const { header, actions, closeButton, closeModal, text } = modal
        return (

          <Modal key={index}
            header={header}
            actions={actions}
            closeButton={closeButton}
            closeModal={closeModal}
            text={text}
          />
        )
      }
      )}
      <Header favorites={favorites} cartProducts={cartProducts} />

      <Outlet />

      <Footer />
    </>

  )
}



export default MainLayout

MainLayout.propTypes = {
  modals: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  cartProducts: PropTypes.array.isRequired

}

