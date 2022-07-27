import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
`;
export const ListItem = styled.li`
  margin-right: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-weight: 500;
  &:hover {
    color: ${p => p.theme.colors.accentText};
  }
  &.active {
    color: red;
  }
`;
