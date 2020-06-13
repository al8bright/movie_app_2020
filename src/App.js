import React from 'react';
import Axios from 'axios';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async() => {
    //const movies = await Axios.get("https://yts-proxy.now.sh/list_movies.json");
    const {
      data: {
        data : {movies},
      },
    } = await Axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
    this.setState({movies, isLoading:false})
  }

  componentDidMount(){
    //영화 데이터 로딩!
    this.getMovies();
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? 'Loding...': 'We are ready'}
      </div>
    );
  }
}

export default App;