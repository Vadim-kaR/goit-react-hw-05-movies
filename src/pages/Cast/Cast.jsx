import { useState, useEffect } from 'react';
import { getCastById } from 'services/API';
import { useParams } from 'react-router-dom';
import { CastDetailsList } from 'components/CastDetailsList';

const Cast = () => {
  const { id } = useParams();

  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const castFetch = async () => {
      const { cast } = await getCastById(id);
      setMovieCast(cast);
    };

    castFetch();
  }, [id]);

  return (
    <>
      <CastDetailsList actors={movieCast} />
    </>
  );
};

export default Cast;
