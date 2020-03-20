import React from 'react';
import s from './foodInfo.module.scss';
import loading from '../../../assets/gif/preview.gif';

const FoodInfo = ({img, title, info, ingredients, steps}) => {
    return (
        <div className={s.main}>
            <div className={s.foodImage}>
                <img src={img || loading} alt="foodPhoto"/>
            </div>

            <div className={s.foodInfo}>
                <h1 className={s.title}>{title}</h1>
                <p className={s.desc}>{info}</p>
                
                <div className={s.stepAndIng}>
                    <div>
                        <h3>{ingredients ? ingredients.length : 0}</h3>
                        <p>ингредиентов</p>
                    </div>

                    <div>
                        <h3>{steps ? steps.length : 0}</h3>
                        <p>шагов</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodInfo;