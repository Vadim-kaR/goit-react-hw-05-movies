import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid black;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.primary};
  border-radius: 5px;

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.primary};
  }
`;

export const Header = styled.header`
  background-color: ${p => p.theme.colors.secondary};
  padding: 20px;
`;
