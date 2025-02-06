import s from './MovieCast.module.css'
import { useEffect, useState } from "react"
import { fetchCast } from "../../../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchCast(movieId);
                setCast(data.cast);
                
            } catch (er) {
                console.log(er);
            }
        };
        getData();
    }, [movieId]
    );

    const img = 'https://image.tmdb.org/t/p/w500/';
    


  return (
    <div className={s.actors_wrapper}>
          <ul className={s.actors_list}>
              {cast.map(({ name, id, character, profile_path }) => (
                  <li key={id}>
                      <img src={img + profile_path} alt={name} width='100' />
                      <p className={s.actor}>{name}</p>
                      <p className={s.actor}>{character}</p>
                  </li>
           ))}   
        </ul>
    </div>
  )
}

export default MovieCast;
