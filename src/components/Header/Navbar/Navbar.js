import React from 'react';
import s from './navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul>
               <NavLink to="/recipes" className={s.link}>РЕЦЕПТЫ</NavLink>
               <NavLink to="/faq" className={s.link}>FAQ</NavLink>
            </ul>
        </div>
    )
}

export default Navbar;