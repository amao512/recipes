import React from 'react';
import s from './ingredients.module.scss';

const Ingredients = ({ ingredients }) => {
    return (
        <div className={s.ingredients}>
            <h3>Ингридиенты</h3>
            {ingredients.map(item => (
                <div key={item.id} className={s.ingredient}>
                    <p className={s.name}>{item.name}</p>
                    <p className={s.count}>{item.count}</p>
                </div>
            ))}
        </div>
    )
}

export default Ingredients;