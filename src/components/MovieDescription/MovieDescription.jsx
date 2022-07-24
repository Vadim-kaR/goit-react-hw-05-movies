export const MovieDescription = ({ info }) => {
  return (
    <div>
      <h2>{info.title}</h2>
      <p>Vote average: {info.vote_average}</p>
      <ul>
        {info.genres.map(genre => (
          <li key={genre.name}>{genre.name}</li>
        ))}
      </ul>

      <p>{info.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
        alt={info.tagline}
      />
    </div>
  );
};
