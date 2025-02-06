
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';


const MovieList = ({data}) => {
  return (
    <ul className={s.trend_list}>
          {data.map(item => (
                <li key={item.id}>
                  <Link  className={s.trend_link} to={`/movies/${item.id}`}>{item.title}</Link>
                </li>
      ))}
    </ul>
  )
}

export default MovieList;
