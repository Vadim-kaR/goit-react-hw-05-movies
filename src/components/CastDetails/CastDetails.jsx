import { useState, useEffect } from 'react';
import { getCastById } from 'services/getCastById';
import { useParams } from 'react-router-dom';
import lostImageMale from '../../images/male.jpeg';
import lostImageFemale from '../../images/woman.jpg';
import { CastList, Img, CastItem, ImgWraper, Text } from './CastDetails.styled';
import { IMG_URL } from 'constants/Img_URL';

const CastDetails = () => {
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
    <>
      <CastList>
        {movieCast &&
          movieCast.map(
            ({ id, name, character, profile_path, original_name, gender }) => {
              return (
                <CastItem key={id}>
                  <Text>
                    <p>{name}</p>
                    {character && <p>Character: {character}</p>}
                  </Text>

                  <ImgWraper>
                    {profile_path ? (
                      <Img
                        src={`${IMG_URL}${profile_path}`}
                        alt={original_name}
                      />
                    ) : (
                      <Img
                        src={gender === 2 ? lostImageMale : lostImageFemale}
                        alt=""
                      />
                    )}
                  </ImgWraper>
                </CastItem>
              );
            }
          )}
      </CastList>
    </>
  );
};

export default CastDetails;
