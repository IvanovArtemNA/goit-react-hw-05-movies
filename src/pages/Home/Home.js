import { getTrending } from 'API';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { NavLink } from 'react-router-dom';
import { Title, List, Item } from './Home.styled';

const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrending()
      .then(({ results }) => {
        setTrendings(results);
      })
      .catch(error => {
        return console.log(error);
      });
  }, []);

  return (
    <div>
      <Box display="flex" flexDirection="column">
        <Title>Trendings today</Title>
        <List>
          {trendings.map(trending => {
            return (
              <Item key={trending.id}>
                <NavLink to={`/movies/${trending.id}`}>
                  {trending.title}
                </NavLink>
              </Item>
            );
          })}
        </List>
      </Box>
    </div>
  );
};

export default Home;
