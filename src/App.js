import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';

const App = () => {
  // eslint-disable-next-line
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=7b14acb1"

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
    console.log(responseJson);
  };

  // eslint-disable-next-line no-undef
  useEffect(() => {
    getMovieRequest();
  }, [])

  return (
  <div className='container-fluid movie-app'>
    <div className='row'>
      <MovieListHeading heading='Movies' />
    </div>
    <div className='row'>
      <MovieList movies={movies} />
    </div>
  </div>
  );
};

export default App;
