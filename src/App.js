/**
 * @file Holds root <App> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import VoteButtons from './components/VoteButtons';
import Comments from './components/Comments';
import Versus from './components/Versus';
import { Howl } from 'howler';
import data from './data/mocks.json';
import './styles/base.scss';

/* Component definition */
class App extends React.Component {
  state = {
    rivals: data.rivals,
    comments: data.comments,
    sounds: {
      click: null
    }
  }

  componentDidMount() {
    const clickSound = new Howl({
      src: ['/sounds/hover.mp3', '/sounds/hover.ogg']
    })

    this.setState({
      sounds: {
        click: clickSound
      }
    })
  }

  handleUpvote = rivalID => {
    const rivalsCopy = JSON.parse(JSON.stringify(this.state.rivals));

    rivalsCopy[rivalID].votes += 1;

    this.setState({
      rivals: rivalsCopy
    });
  }

  handlePlaySound = sound => {
    this.state.sounds[sound].play();
  }

  handleVoteClick = rivalID => {
    this.handlePlaySound('click');
    this.handleUpvote(rivalID);
  }

  render() {
    const { rivals, comments } = this.state

    return (
      <React.Fragment>
        <Header rivals={rivals} />
        <main>
          <Versus rivals={rivals} />
          <VoteButtons 
            rivals={rivals} 
            onVote={this.handleVoteClick}
          />
          <Comments comments={comments} />
        </main>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default App;
