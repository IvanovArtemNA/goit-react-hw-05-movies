import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Image = styled.img`
  width: 200px;
  height: 300px;
  margin: 20px;

  border-radius: 2px;
`;

export const Card = styled.div`
  display: flex;
`;

export const Information = styled.div``;

export const Links = styled(Link)`
  max-width: 100px;
  padding: 10px 20px;

  text-align: center;
  text-decoration: none;
  font-weight: 700;

  color: white;
  background-color: green;
`;

export const NavLinks = styled(NavLink)`
  padding: 10px 20px;
  margin-left: 20px;

  text-decoration: none;

  color: white;
  background-color: green;
`;

export const List = styled.ul`
  padding-left: 40px;
`;

export const Item = styled.li`
  margin-top: 30px;
`;
