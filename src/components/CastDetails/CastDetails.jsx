import { useState, useEffect } from 'react';
import { getCastById } from 'services/API';
import { useParams } from 'react-router-dom';
import lostImage from '../../images/male.jpeg';

export const CastDetails = () => {
  const { id } = useParams();

  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const castFetch = async () => {
      const { cast } = await getCastById(id);
      setMovieCast(cast);
    };

    return () => castFetch();
  }, [id]);

  return (
    <div>
      <ul>
        {movieCast &&
          movieCast.map(
            ({ id, name, character, profile_path, original_name }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                  {profile_path ? (
                    <img
                      style={{ width: '120px' }}
                      src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                      alt={original_name}
                    />
                  ) : (
                    <img style={{ width: '120px' }} src={lostImage} alt="" />
                  )}
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};
