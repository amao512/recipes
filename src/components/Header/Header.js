import React from 'react';
import s from './header.module.scss';
import Navbar from './Navbar/Navbar';
import { NavLink } from 'react-router-dom';

const Header = ({ blackHeader }) => {
    return (
        <header className={blackHeader ? s.blackHeader : null}>
            <div className='container'>
                <div className={s.header}>
                    <div className={s.logo}>
                        <NavLink className={s.title} to='/'>Recipes</NavLink>
                    </div>

                    <Navbar />
                </div> 
            </div>     
        </header>
    )
}

export default Header;