import React from 'react';
import s from './category.module.scss';
import { NavLink } from 'react-router-dom';

const Category = ({ categories, setCategoryTitle }) => {
    return (
        <div className={s.category}>
            <div className='container'>
                <ul>
                    {categories.map(c => (
                        <NavLink key={c.id} className={s.foodLink} 
                            to={'/recipes/' + c.slug}
                            // onClick={() => setCategoryTitle(c.title)}
                            >{c.title}</NavLink>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Category;