import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { creditsMovie } from 'API';
import { Box } from '../Box/Box';
import { List, Item, Image } from './Cast.styled';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    creditsMovie(movieId)
      .then(({ cast }) => {
        setCredits(cast);
      })
      .catch(error => {
        return console.log(error);
      });
  }, [movieId]);

  return (
    <>
      <List>
        {credits.map(({ credit_id, name, character, profile_path }) => {
          return (
            <Item key={credit_id}>
              <Box>
                <Image src={`${BASE_IMAGE_URL}${profile_path}`} alt={name} />
              </Box>
              <p>{name}</p>
              <p>Character: {character}</p>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default Cast;
