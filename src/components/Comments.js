/**
 * @file Holds the <Comments> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Comments.module.scss';
import Icon from './Icon';

/* Component definition */
class Comments extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    const { comments } = this.props;

    return <div className={styles.wrapper}>
      <form onSubmit={this.handleSubmit} className={styles.header}>
        <label className={styles.name}>
          <span>Name:</span>
          <input type="text" />
        </label>
        <label className={styles.comment}>
          <input type="text" placeholder="Type here..."/>
          <button type="submit">
            <Icon name="paperplane" />
          </button>
        </label>
      </form>
      <section>
        {comments.map((item, index) =>
          <div key={index} className={styles.comment_item}>
            <h3>
              {item.name}
              <span>{item.timestamp}</span>
              <button><Icon name="menu-horizontal" /></button>
            </h3>
            <p>{item.content}</p>
          </div>
        )}
      </section>
    </div>
  }
}

/* Prop types definition */
Comments.propTypes = {
  comments: PropTypes.array.isRequired
}

export default Comments;