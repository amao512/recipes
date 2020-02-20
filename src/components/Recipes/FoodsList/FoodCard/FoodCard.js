import React from 'react';
import s from './foodCard.module.scss';

const FoodCard = ({title, img}) => {
    return (
        <div className={s.foodCard}>
            <div className={s.img}>
                <img src={img} alt='foodPhoto' />

                <div className={s.overlay}/>
            </div>

            <h1 className={s.name}>{title}</h1>
        
            <div className={s.border}/>
            <p className={s.readMore}>Read More</p>
        </div>
    )
}

export default FoodCard;