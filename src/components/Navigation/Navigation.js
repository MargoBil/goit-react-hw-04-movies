import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}><NavLink className={s.link} activeClassName={s.active} exact to="/"><h2>Home</ h2></NavLink></li>
      <li className={s.item}><NavLink className={s.link} activeClassName={s.active} exact  to="/movies"><h2>Movies</h2></NavLink></li>
    </ul>
  )
}

export default Navigation;