import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from 'services/getReviewById';
import { ReviewsList } from 'components/ReviewsList';

const Reviews = () => {
  const [movieReview, setMovieReview] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchReview = async () => {
      const { results } = await getReviewById(id);
      setMovieReview(results);
    };

    fetchReview();
  }, [id]);

  return (
    <>
      {movieReview && movieReview.length !== 0 ? (
        <ReviewsList reviews={movieReview} />
      ) : (
        <p>There is no information about this movie</p>
      )}
    </>
  );
};

export default Reviews;
