
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';
import { fetchTrending } from '../../../services/api';


const HomePage = () => {
    const [trend, setTrend] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchTrending();  
                return setTrend(prev => [...prev, ...data]);
                
            } catch (er) {
                console.log(er);
            }
        };
        getData();
    }, []);

    
  return (
    <div className={s.home_wrapper}>
          <h2 className={s.home_title}>Trending today</h2>
          <MovieList data={trend} />
    </div>
  )
}

export default HomePage;
