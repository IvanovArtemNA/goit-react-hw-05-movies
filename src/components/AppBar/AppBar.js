import { Box } from 'components/Box/Box';
import { NavItem } from './AppBar.styled';

const nav = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Box display="flex">
      {nav.map(({ href, text }) => (
        <NavItem to={href} key={href}>
          {text}
        </NavItem>
      ))}
    </Box>
  );
};
