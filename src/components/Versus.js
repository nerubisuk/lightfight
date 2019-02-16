/**
 * @file Holds the <Versus> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import styles from '../styles/components/Versus.module.scss';

/* Component definition */
const Versus = () => 
  <div className={styles.wrapper}>
    <div>
      <img src="/images/dota.jpg" alt="first" />
    </div>
    <div>
      <img src="/images/fortnite.jpg" alt="second" />
    </div>
  </div>;

export default Versus;