import React, { useState } from 'react';
import s from './foodPage.module.scss';
import Steps from './Steps/Steps';
import Ingredients from './Ingredients/Ingredients';

const FoodPage = ({img, title, info, ingredients, steps}) => {

    const [cooking, setCooking] = useState(false);

    const showDetails = () => setCooking(true);
    const hideDetails = () => setCooking(false);

    return (
        <div>
            <div className="container">
                <div className={s.foodPage}>
                    <div className={s.foodImage}>
                        <img src={img} alt="foodPhoto"/>
                    </div>

                    <div className={s.foodInfo}>
                        <h1>{title}</h1>
                        <p>{info}</p>
                        
                        <p>Ингредиентов: {ingredients ? ingredients.length : 0}</p>
                        <p>Шагов: {steps ? steps.length : 0}</p>
                    </div>

                    <button className={s.showHideDetails}
                            onClick={cooking ? hideDetails : showDetails}
                    >{cooking ? 'Скрыть Детали' : 'Показать Детали'}</button>
                </div>

                {cooking &&
                    <div className={s.cooking}>
                        {steps && <Steps steps={steps}/>}
                        {ingredients && <Ingredients ingredients={ingredients}/>}
                    </div>
                }
            </div>
        </div>
    )
}

export default FoodPage;