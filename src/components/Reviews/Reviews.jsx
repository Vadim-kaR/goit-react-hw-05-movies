import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from 'services/getReviewById';
import { Item, AuthorName } from './Reviews.styled';
const ReviewsDetails = () => {
  const [movieReview, setMovieReview] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchReview = async () => {
      const { results } = await getReviewById(id);
      setMovieReview(results);
    };

    return () => fetchReview();
  }, [id]);

  return (
    <div>
      <ul>
        {movieReview && movieReview.length !== 0 ? (
          movieReview.map(({ author, id, content }) => {
            return (
              <Item key={id}>
                <AuthorName>
                  <b>Author: </b>
                  <b>{author}</b>
                </AuthorName>
                <p>{content}</p>
              </Item>
            );
          })
        ) : (
          <p>There is no information about this movie</p>
        )}
      </ul>
    </div>
  );
};

export default ReviewsDetails;
