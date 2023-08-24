import PropTypes from 'prop-types'

import React from 'react'
import styles from "./NotAvailable.module.scss"
const NotAvailable = ({type='', text=''}) => {
  return (
    <div className={'container ' + styles['not__available__container']}>
      <h3 className={`${styles['not__available']}`}>
          {!text ? `There are no ${type} products!` : text}
      </h3>
    </div>
  )
}

export default NotAvailable


NotAvailable.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}