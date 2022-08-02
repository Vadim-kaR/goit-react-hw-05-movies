import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiChevronDoubleLeft } from 'react-icons/hi';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  padding: 5px;
  cursor: pointer;
  background-color: inherit;
  border: none;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 500;

  &:hover {
    color: ${p => p.theme.colors.accentText};
  }
`;

export const Icon = styled(HiChevronDoubleLeft)`
  width: 15px;
  padding-top: ${p => p.theme.space.s};
`;
