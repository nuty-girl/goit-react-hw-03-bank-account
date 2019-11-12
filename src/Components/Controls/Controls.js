import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  onDecrement,
  onIncrement,
  indexPublication,
  publicationQuantity,
}) => (
  <section className={styles.controls}>
    {indexPublication > 1 && (
      <button type="button" className={styles.button} onClick={onDecrement}>
        Назад
      </button>
    )}
    {indexPublication < publicationQuantity && (
      <button type="button" className={styles.button} onClick={onIncrement}>
        Вперед
      </button>
    )}
  </section>
);

Controls.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  indexPublication: PropTypes.number.isRequired,
  publicationQuantity: PropTypes.number.isRequired,
};

export default Controls;

/* prevState < this.props.items.lenght &&
 */
