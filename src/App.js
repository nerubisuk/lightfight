import React from 'react';
import './styles/base.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import VoteButtons from './components/VoteButtons';
import Comments from './components/Comments';
import Versus from './components/Versus';
import data from './data/mocks.json';

class App extends React.Component {
  render() {
    return (
      <>
        <Header rivals={data.rivals} />
        <main>
          <Versus rivals={data.rivals} />
          <VoteButtons rivals={data.rivals} />
          <Comments comments={data.comments} />
        </main>
        <NavBar />
      </>
    );
  }
}

export default App;
