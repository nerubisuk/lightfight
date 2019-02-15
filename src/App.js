import React, { Component } from 'react';
import './App.css';
import Header from './common/Header';
import Detail from './pages/Detail/Detail';
import Footer from './common/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Detail />
        <Footer />
      </div>
    );
  }
}

export default App;
