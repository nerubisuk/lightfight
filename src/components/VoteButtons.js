/**
 * @file Holds the <VoteButtons> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import styles from '../styles/components/VoteButtons.module.scss';

/* Component definition */
const VoteButtons = () => 
  <div className={styles.wrapper}>
    <button>Dota 2</button>
    <button>Fortnite</button>
  </div>;

export default VoteButtons;