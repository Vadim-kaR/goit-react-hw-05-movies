import {
  CastItem,
  ImgWraper,
  Text,
  CastList,
  Img,
} from './CastDetailsList.styled';
import { IMG_URL } from 'constants/constants';
import lostImageMale from '../../images/male.jpeg';
import lostImageFemale from '../../images/woman.jpg';

export const CastDetailsList = ({ actors }) => {
  return (
    <>
      <CastList>
        {actors?.map(
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
