import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeFoodCategory, allFoodCategory } from '../../redux/foodsReducer';
import { compose } from 'redux';
import s from './category.module.scss';
import { NavLink } from 'react-router-dom';


const Category = ({ changeFoodCategory, match, allFoodCategory, categories }) => {
    const slugId = match.params.slug;

    !slugId ? allFoodCategory() : changeFoodCategory(slugId);

    const [categoryCondition, setCategoryCondition] = useState(false);

    const showCategory = () => setCategoryCondition(true);
    const hideCategory = () => setCategoryCondition(false);

    return (
        <div>
            {categoryCondition && 
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
            }
            
            <div className={s.showHideCategories}>
                <i className='material-icons' onClick={categoryCondition ? hideCategory : showCategory}>
                    {categoryCondition ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                </i>
            </div>
        </div>
    )
}

const mstp = state => ({
    categories: state.category.categories
})

export default compose(
    connect(mstp, { changeFoodCategory, allFoodCategory }),
    withRouter
)(Category);