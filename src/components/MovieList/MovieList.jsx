import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './MovieList.module.css';
import clsx from 'clsx';

// const buildLinkClass = ({ isActive }) => {
//   return clsx(s.link, isActive && s.active);
// };

const MovieList = ({data}) => {
  return (
    <ul className={s.trend_list}>
          {data.map(item => (
                <li key={item.id}>
                  <NavLink className={s.trend_link} >{item.title}</NavLink>
                </li>
      ))}
    </ul>
  )
}

export default MovieList;
