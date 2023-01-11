import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Btn, MoviesSection, SearchBar, SearchInput } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      setLoading(false);
      return;
    }
    if (searchQuery.trim() === '') {
      alert('Enter a search query!');
      setLoading(false);
      return;
    }
    searchMovie(searchQuery.toLowerCase().trim())
      .then(({ results, total_results }) => {
        setMovies(results);
        setLoading(false);
        if (total_results === 0) {
          setLoading(false);
          alert('This movie was not found.');
        }
      })
      .catch(error => {
        setLoading(false);
        return alert('Please retry!');
      });
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    const searchQuery = event.target.elements.search.value;
    setSearchParams(searchQuery !== '' ? { query: searchQuery.trim() } : {});
    if (searchQuery === '') {
      setLoading(false);
      alert('Enter a search query!');
      return;
    }
    event.target.reset();
  };

  return (
    <MoviesSection>
      <div>
        <SearchBar onSubmit={handleSubmit}>
          <SearchInput name="search" />
          <Btn type="submit">Search</Btn>
        </SearchBar>
      </div>
      {loading}
      {movies.length > 0 && !loading && <MoviesList movies={movies} />}
    </MoviesSection>
  );
};

export default Movies;
