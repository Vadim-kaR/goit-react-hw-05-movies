import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from 'services/getReviewById';

export const ReviewsDetails = () => {
  const [movieReview, setMovieReview] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchReview = async () => {
      const { results } = await getReviewById(id);
      setMovieReview(results);
      console.log(results);
    };

    return () => fetchReview();
  }, [id]);

  return (
    <div>
      <ul>
        {movieReview &&
          movieReview.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <p>
                  <span>Author: </span>
                  {author}
                </p>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
