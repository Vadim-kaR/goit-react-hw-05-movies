import styled from 'styled-components';

export const MovieTitle = styled.h2`
  margin-bottom: ${p => p.theme.space.l};
`;

export const GenresList = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  margin-right: ${p => p.theme.space.m};
  margin-bottom: ${p => p.theme.space.m};
`;

export const VoteText = styled.p`
  margin-bottom: ${p => p.theme.space.m};
`;

export const Overview = styled.p`
  margin-bottom: ${p => p.theme.space.m};
  text-indent: 20px;
  padding-top: 20px;
`;

export const Img = styled.img`
  width: 320px;
  border-radius: 10px;
  margin-right: ${p => p.theme.space.m};
`;
