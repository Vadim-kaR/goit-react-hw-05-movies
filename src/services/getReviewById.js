import { API_KEY } from 'constants/API_KEY';
import { BASE_URL } from 'constants/BASE_URL';

export const getReviewById = async id => {
  try {
    const response = fetch(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    ).then(res => {
      return res.json();
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
