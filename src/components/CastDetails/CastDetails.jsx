import { useState, useEffect } from 'react';
import { getCastById } from 'services/getCastById';
import { useParams } from 'react-router-dom';
import lostImageMale from '../../images/male.jpeg';
import lostImageFemale from '../../images/woman.jpg';

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
            ({ id, name, character, profile_path, original_name, gender }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                  {character && <p>Character: {character}</p>}

                  {profile_path ? (
                    <img
                      style={{ width: '120px' }}
                      src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                      alt={original_name}
                    />
                  ) : (
                    <img
                      style={{ width: '120px' }}
                      src={gender === 2 ? lostImageMale : lostImageFemale}
                      alt=""
                    />
                  )}
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};
