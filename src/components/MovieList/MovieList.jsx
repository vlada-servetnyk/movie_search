
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';


const MovieList = ({ data }) => {
  const location = useLocation();
  
  return (
    <ul className={s.trend_list}>
          {data.map((item, index) => (
                <li className={s.trend_item} key={`${item.id} - ${index}`}>
                  <Link  className={s.trend_link} state={location} to={`/movies/${item.id}`}>{item.title}</Link>
                </li>
      ))}
    </ul>
  )
}

export default MovieList;
