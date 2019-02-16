import React from 'react';
import './styles/base.scss';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
