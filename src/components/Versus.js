/**
 * @file Holds the <Versus> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import VoteProgress from './VoteProgress';
import styles from '../styles/components/Versus.module.scss';

/* Component definition */
class Versus extends React.Component {
  state = {
    rival_1_anim: null,
    rival_2_anim: null,
    icon_versus_anim: null,
    upvote: null
  }

  componentDidMount() {
    this.setState({
      rival_1_anim: styles.slide_in_blurred_top,
      rival_2_anim: styles.slide_in_blurred_bottom,
      icon_versus_anim: styles.bounce_in_bck
    })

    setTimeout(() => {
      this.setState({
        icon_versus_anim: styles.puff_out_center
      })
    }, 2200)
  }

  resetUpvote = () => {
  }

  componentDidUpdate(prevProps) {
    prevProps.rivals.forEach((rival, index) => {
      if (this.props.rivals[index].votes !== prevProps.rivals[index].votes) {
        this.setState({
          upvote: index
        }, () =>
          this.setState({
            upvote: null
          })
        )
      }
    })
  }

  render() {
    const { rivals } = this.props,
      { upvote } = this.state;

    return <div className={styles.wrapper}>
      <div className={this.state.rival_1_anim}>
        <VoteProgress rival={rivals[0]} className={styles.rival_1}/>
        <img src={rivals[0].image} alt="first" />

        {upvote !== 0 && <Icon
          name="upvote" 
          className={[`${styles.icon_upvote_1} ${styles.puff_out_center}`]} 
        />}
      </div>
      <Icon name="versus" className={[`${styles.icon_versus} ${this.state.icon_versus_anim}`]} />
      <div className={this.state.rival_2_anim}>
        <VoteProgress rival={rivals[1]} className={styles.rival_2}/>
        <img src={rivals[1].image} alt="second" />
        {upvote !== 1 && <Icon name="upvote" className={[`${styles.icon_upvote_2} ${styles.puff_out_center}`]} />}
      </div>
    </div>
  }
}

/* Prop types definition */
Versus.propTypes = {
  rivals: PropTypes.array.isRequired
}

export default Versus;