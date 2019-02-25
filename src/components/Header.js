/**
 * @file Holds the <Header> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';
import styles from '../styles/components/Header.module.scss';

/* Component definition */
const Header = ({ rivals, countdown }) =>
  <header className={styles.wrapper}>
    <div>
      <button>
        <Icon name="arrow-left" className={styles.icon_arrow} />
      </button>
      <h1>
        {rivals[0].name} VS {rivals[1].name}
        <span>
          <Icon name="clock" className={styles.icon_clock} />
          { countdown } remaining to vote
        </span>
      </h1>
    </div>
    <div>
      <button><Icon name="share" className={styles.icon_share} /></button>
      <button><Icon name="menu" className={styles.icon_menu} /></button>
    </div>
  </header>;

/* Prop types definition */
Header.propTypes = {
  rivals: PropTypes.array.isRequired,
  countdown: PropTypes.any
}
export default Header; 