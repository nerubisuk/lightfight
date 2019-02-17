/**
 * @file Holds the <VoteButtons> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Howl } from 'howler';
import styles from '../styles/components/VoteButtons.module.scss';

/* Component definition */
const VoteButtons = ({ rivals }) => {
  const handleClick = () => {
    const click = new Howl({
      src: ['/sounds/click.mp3', '/sounds/click.ogg']
    });

    const hover = new Howl({
      src: ['/sounds/hover.mp3', '/sounds/hover.ogg']
    })

    click.play();
    hover.play();
  }

  return <div className={styles.wrapper}>
    <button onClick={handleClick}>{rivals[0].name}</button>
    <button onClick={handleClick}>{rivals[1].name}</button>
  </div>
}

/* Prop types definition */
VoteButtons.propTypes = {
  rivals: PropTypes.array.isRequired
}

export default VoteButtons;