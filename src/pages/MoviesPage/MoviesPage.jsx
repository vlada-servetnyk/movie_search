import { useEffect, useState } from 'react';
import s from './MoviesPage.module.css';
import { fetchSearchFilms } from '../../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import { Outlet, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {

    const [films, setFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';


    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchQuery = form.query.value.trim();
        if (searchQuery === '') return;

        searchParams.set('query', searchQuery);
        setSearchParams(searchParams);
        form.reset();
    };
    
    useEffect(() => {
        if (!query) {
            setFilms([]);
            return
        };

        const getData = async () => {
            try {
                const data = await fetchSearchFilms(query);
                setFilms(data)
            } catch (er) {
                console.log(er);
            }
            
        };
        getData();
    }, [query])
    

  return (
    <div className={s.movies_wrapper}>
        <form className={s.form} onSubmit={onSubmit}>
            <input className={s.search} type="text" name="query" />
           <button className={s.btn_search} type='submit'>Search</button>   
          </form>
          <MovieList data={films} />
          <Outlet/>
      </div>
      
  )
}

export default MoviesPage;
