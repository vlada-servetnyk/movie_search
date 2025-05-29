import s from './MovieDetailsPage.module.css';
import { useEffect, useState, useRef } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchFilmById } from "../../../services/api";
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const goBackUrl = useRef(location.state);
  
  
  useEffect(() => {
    
    const getData = async () => {
      try {
        const data = await fetchFilmById(movieId);
        setFilm(data);
      } catch (er) {
        console.log(er);
      }
    };
    getData();
  }, [movieId]);

  if (!film) return <h2>Loading...</h2>;
  
  
  const img = 'https://image.tmdb.org/t/p/w500/';
  const { title, overview, genres, vote_average, poster_path } = film;
  

  return (
    <div className={s.film_page}>
      <div className={s.film_wrapper}>
        <button className={s.btn_goback} ><Link className={s.goback} to={goBackUrl.current}>Go back</Link></button>
        <div className={s.img_wrapper}>
          <img src={img + poster_path} alt={title} width='200' />
          <div className={s.description}>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
          <h3>Overviews</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <span className={s.genres}>
            {genres.map(item => <p>{item.name}</p>)}
          </span>
          </div>
        </div>
      </div>
      <div className={s.info_wrapper}>
        <h3 className={s.info}>Additional information</h3>
        <ul className={s.list_nav}>
          <li key="cast"><NavLink className={buildLinkClass} to='cast'>Cast</NavLink></li>
          <li key="reviews"><NavLink className={buildLinkClass} to='reviews'>Reviews</NavLink></li>
          </ul>
      </div>
       <Outlet/>
    </div>
   
  )
}

export default MovieDetailsPage;
