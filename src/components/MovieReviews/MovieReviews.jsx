import s from './MovieReviews.module.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../../services/api";


const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
          const getData = async () => {
              try {
                const data = await fetchReviews(movieId);
                  setReviews(data.results); 
              } catch (er) {
                  console.log(er);
              }
          };
          getData();
      }, [movieId]
  );
  

  return (
    <div className={s.reviews_wrapper}>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>{author}
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieReviews;
