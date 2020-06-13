import React from 'react';
import Axios from 'axios';
import Movie from './routes/Home';
import './App.css';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  };


  render() {
    const {isLoading,movies} = this.state;
    return (
      <Home />
    );
  }
}

export default App;