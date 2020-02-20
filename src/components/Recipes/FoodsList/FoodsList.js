import React from 'react';
import s from './foodsList.module.scss';
import FoodCard from './FoodCard/FoodCard';
import { NavLink } from 'react-router-dom';

const FoodsList = ({ foods, categoryTitle, match }) => {
    return (
        <div>
            <div className='container'>
                {match.params.slug && 
                    <h1 className={s.categoryTitle}>{categoryTitle}</h1>
                }

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

export default FoodsList;