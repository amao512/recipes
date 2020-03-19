import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';
import s from './foodsList.module.scss';

const FoodsList = ({ categories, match, foods }) => {

    const categoryTitle = categories.map(c => c.slug === match.params.slug && c.title)

    return (
        <div>
            <div className='container'>
                { match.params.slug && <h1 className={s.categoryTitle}>{categoryTitle}</h1> }

                <div className={s.foods}>
                    {foods.map(food => (
                        <NavLink key={food.id} 
                                 to={'/recipes/' + food.category + '/food/' + food.slug}
                                 className={s.food}
                        >
                            <FoodCard {...food} />
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

const mstp = state => ({
    foods: state.foods.food,
    categories: state.category.categories,
})

export default compose(connect(mstp), withRouter)(FoodsList);