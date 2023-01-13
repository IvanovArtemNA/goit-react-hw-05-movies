import { NavLink, useLocation } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => {
        return (
          <Item key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </Item>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
