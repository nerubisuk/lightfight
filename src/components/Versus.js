/**
 * @file Holds the <Versus> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Versus.module.scss';

/* Component definition */
const Versus = ({ rivals }) => 
  <div className={styles.wrapper}>
    <div>
      <img src={rivals[0].image} alt="first" />
    </div>
    <div>
      <img src={rivals[1].image} alt="second" />
    </div>
  </div>;

/* Prop types definition */
Versus.propTypes = {
  rivals: PropTypes.array.isRequired
}

export default Versus;