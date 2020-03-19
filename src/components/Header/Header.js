import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import s from './header.module.scss';
import Navbar from './Navbar/Navbar';
import { NavLink } from 'react-router-dom';

const Header = ({ match }) => {

    const [blackHeader, setBlackHeader] = useState(false);
    
    useEffect(() => {
        !match.isExact ? setBlackHeader(true) : setBlackHeader(false);
    }, [match])

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

export default compose(withRouter)(Header);