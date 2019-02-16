import React from 'react';
import './styles/base.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import VoteButtons from './components/VoteButtons';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <VoteButtons />
        </main>
        <NavBar />
      </>
    );
  }
}

export default App;
