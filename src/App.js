import React from 'react';
import './styles/base.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import VoteButtons from './components/VoteButtons';
import Comments from './components/Comments';
import Versus from './components/Versus';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Versus />
          <VoteButtons />
          <Comments />
        </main>
        <NavBar />
      </>
    );
  }
}

export default App;
