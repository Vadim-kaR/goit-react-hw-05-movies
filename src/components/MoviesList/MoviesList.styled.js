import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.mid};

  &:hover {
    color: ${p => p.theme.colors.accentText};
  }
`;
