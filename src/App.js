import React from 'react';
import './styles/base.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NavBar />
      </>
    );
  }
}

export default App;
