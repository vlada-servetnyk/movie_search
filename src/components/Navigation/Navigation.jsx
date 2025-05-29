import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <div className={s.header_wrapper}>
    <header className={s.header}>
      <h1 className={s.title}>Movie Search</h1>
      <nav className={s.navigation}>
        <NavLink className={buildLinkClass} to='/'>Home</NavLink>
        <NavLink className={buildLinkClass} to='/movies'>Movies</NavLink>
      </nav>
      </header>
      </div>
  )
}

export default Navigation;
