/**
 * @file Holds the <VoteButtons> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/VoteButtons.module.scss';

/* Component definition */
const VoteButtons = ({ rivals }) => 
  <div className={styles.wrapper}>
    <button>{rivals[0].name}</button>
    <button>{rivals[1].name}</button>
  </div>;

/* Prop types definition */
VoteButtons.propTypes = {
  rivals: PropTypes.array.isRequired
}

export default VoteButtons;