/**
 * @file Holds the <VoteProgress> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';
import styles from '../styles/components/VoteProgress.module.scss';

/* Component definition */
const VoteProgress = ({ rival, className }) => {
  const style = {
    width: `${rival.votes}px`,
  }

  return <section className={[`${styles.wrapper} ${className}`]}>
    <Icon name="heart" className={styles.heart_icon} />
    <p>
      <em className={styles.progress} />
      <em className={styles.progress_overlay} style={style} />
      { rival.name }
      <span>{ rival.votes } upvotes</span>
    </p>
  </section>
};

/* Prop types definition */
VoteProgress.propTypes = {
  rival: PropTypes.object.isRequired
}

export default VoteProgress;