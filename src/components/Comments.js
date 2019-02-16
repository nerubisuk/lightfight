/**
 * @file Holds the <Comments> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import styles from '../styles/components/Comments.module.scss';
import Icon from './Icon';

/* Component definition */
class Comments extends React.Component {
  state = {
    comments: [
      {
        name: "Bloomberg",
        timestamp: "3 hrs ago",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloret."
      },
      {
        name: "Gamerlight",
        timestamp: "7 hrs ago",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloret."
      }
    ]
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    const { comments } = this.state;

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

export default Comments;