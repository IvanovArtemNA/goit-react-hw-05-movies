import { useParams, Outlet, useLocation } from 'react-router-dom';
import { detalisMovie } from 'API';
import { useEffect, useState, Suspense } from 'react';
import {
  Image,
  Information,
  Card,
  Links,
  List,
  Item,
  NavLinks,
} from './MovieDetails.styled';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const [detalis, setDetalis] = useState({});
  const { movieId } = useParams();
  const [genreList, setGenreList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    detalisMovie(movieId)
      .then(detalis => {
        setDetalis(detalis);
        const genreList = [];
        detalis.genres.forEach(({ name }) => genreList.push(name));
        setGenreList(genreList);
      })
      .catch(error => {
        return console.log(error);
      });
  }, [movieId]);

  const releaseYear = new Date(detalis.release_date);
  const back = location.state?.from ?? '/';

  return (
    <div>
      <NavLinks to={back}>Go back</NavLinks>
      <Card>
        <Image
          src={`${BASE_IMAGE_URL}${detalis.poster_path}`}
          alt={detalis.title}
          width="300"
        />
        <Information>
          <h2>
            {detalis.title} ({releaseYear.getFullYear()})
          </h2>
          <p>User score: {detalis.vote_count} </p>
          <h3>Overview</h3>
          <p>{detalis.overview}</p>
          <h4>Genres</h4>
          <p>{genreList.join(', ')}</p>
        </Information>
      </Card>
      <List>
        <p>Additional information</p>
        <Item>
          <Links to="cast" state={{ from: back }}>
            Cast
          </Links>
        </Item>
        <Item>
          <Links to="reviews" state={{ from: back }}>
            Reviews
          </Links>
        </Item>
      </List>
      <Suspense fallback={<h1>Movie Details to be appeared</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
