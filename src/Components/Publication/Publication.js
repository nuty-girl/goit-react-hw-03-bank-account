import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ publication, indexPublication }) => {
  const { title, text } = publication;
  return (
    <article className={styles.publication}>
      <h2>
        {indexPublication}. {title}
      </h2>
      <p>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  indexPublication: PropTypes.number.isRequired,
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
