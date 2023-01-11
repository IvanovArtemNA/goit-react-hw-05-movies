import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 20px;

  text-decoration: none;
  font-size: 20px;

  color: black;

  &.active {
    color: green;
  }
`;
