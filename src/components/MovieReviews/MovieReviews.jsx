import s from './MovieReviews.module.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../../services/api";


const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [expanded, setExpanded] = useState(null);

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
  
  const handleShowMore = (id) => {
    setExpanded(expanded === id ? null : id); 
  };

  return (
    <div className={s.reviews_wrapper}>
      <ul className={s.reviews_list}>
        {reviews.map(({ id, author, content }) => (
          <li className={s.reviews_item} key={id}>
            <h3 className={s.reviews_title}>{author}</h3>
            <div
              className={`${s.reviews_content} ${expanded === id ? s.show_full : ""}`}
            >
              <p>{content}</p>
            </div>
            {content.length > 200 && (
              <span className={s.show_more} onClick={() => handleShowMore(id)}>
                {expanded === id ? "hide" : "Show more..."}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieReviews;
