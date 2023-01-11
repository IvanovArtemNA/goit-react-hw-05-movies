import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsMovie } from 'API';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    reviewsMovie(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(error => {
        return console.log(error);
      });
  }, [movieId]);
  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  } else {
    return (
      <ul>
        {reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h5>Author: {author}</h5>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Reviews;
