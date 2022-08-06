import { useState, useEffect } from 'react';
import { getCastById } from 'services/getCastById';
import { useParams } from 'react-router-dom';
import { CastDetailList } from 'components/CastDetailList';

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

  return <CastDetailList actors={movieCast} />;
};

export default Cast;
