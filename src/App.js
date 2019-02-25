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
import Popup from './components/Popup';
import { Howl } from 'howler';
import data from './data/mocks.json';
import './styles/base.scss';
import moment from 'moment';

/* Component definition */
class App extends React.Component {
  state = {
    rivals: data.rivals,
    comments: data.comments,
    sounds: {
      click: null
    },
    isPopup: false,
    isPaid: false,
    countdown: null
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

    this.setCountDown();
  }

  setCountDown() {
    const end = moment().endOf('day'); 

    setInterval(() => {
      const timeLeft = moment(end.diff(moment())); // get difference between now and timestamp
      const countdown = timeLeft.format('HH:mm:ss'); // make pretty

      this.setState({
        countdown
      });
    }, 1000);
  }

  handleUpvote = rivalID => {
    const rivalsCopy = JSON.parse(JSON.stringify(this.state.rivals));

    rivalsCopy[rivalID].votes += 1;

    this.setState({
      rivals: rivalsCopy,
      // isPaid: false
    });
  }

  handlePlaySound = sound => {
    this.state.sounds[sound].play();
  }

  handleVoteClick = rivalID => {
    if (!this.state.isPaid) {
      this.handleTogglePopup();
    } else {
      this.handlePlaySound('click');
      this.handleUpvote(rivalID);
    }
  }

  handleTogglePopup = () => {
    this.setState({
      isPopup: !this.state.isPopup
    })
  }

  handlePaid = () => {
    this.handleTogglePopup();

    this.setState({
      isPaid: true
    }) 
  }

  render() {
    const { rivals, comments, isPopup, countdown } = this.state

    return (
      <React.Fragment>
        <Header rivals={rivals} countdown={countdown} />
        { 
          isPopup ? <Popup onTogglePopup={this.handleTogglePopup} onPaid={this.handlePaid} />
          : <main>
              <Versus rivals={rivals} />
              <VoteButtons 
                rivals={rivals} 
                onVote={this.handleVoteClick}
              />
              <Comments comments={comments} />
            </main>
        }
        <NavBar />
      </React.Fragment>
    );
  }
}

export default App;
