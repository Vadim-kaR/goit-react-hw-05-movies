import {
  MovieTitle,
  GenresList,
  ListItem,
  VoteText,
  Overview,
  Img,
} from './MovieDescription.styled';
import { Box } from '../Box/Box';
import { IMG_URL } from 'constants/constants';

export const MovieDescription = ({ info }) => {
  return (
    <div>
      <MovieTitle>"{info.title}"</MovieTitle>
      <VoteText>
        <b>User Score:</b> {Math.floor(info.vote_average * 10) + '%'}
      </VoteText>
      <GenresList>
        <b>Genres:&nbsp;</b>
        {info.genres.map(genre => (
          <ListItem key={genre.name}>{genre.name}</ListItem>
        ))}
      </GenresList>

      <Box display="flex">
        <Img src={`${IMG_URL}${info.poster_path}`} alt={info.tagline} />
        <Overview>{info.overview}</Overview>
      </Box>
    </div>
  );
};
