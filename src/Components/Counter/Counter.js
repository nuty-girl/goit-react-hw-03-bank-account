import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ indexPublication, publicationQuantity }) => (
  <p className={styles.counter}>
    {indexPublication}/{publicationQuantity}
  </p>
);

Counter.propTypes = {
  indexPublication: PropTypes.number.isRequired,
  publicationQuantity: PropTypes.number.isRequired,
};

export default Counter;
