import React from 'react';
import styles from "./Button.module.scss"
import PropTypes from 'prop-types'
const Button = ({ backgroundColor, text, onClick }) => {
  return (
    <button className={styles.btn} style={{
      backgroundColor: backgroundColor,
      borderColor: backgroundColor,

    }} onClick={onClick} >
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}