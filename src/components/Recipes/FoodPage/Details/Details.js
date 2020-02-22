import React, { useState } from 'react';
import s from './details.module.scss';
import Steps from './Steps/Steps';
import Ingredients from './Ingredients/Ingredients';

const Details = ({steps, ingredients}) => {

    const [cooking, setCooking] = useState(false);

    const showDetails = () => setCooking(true);
    const hideDetails = () => setCooking(false);

    return (
        <div>
            <button className={s.showHideDetails}
                    onClick={cooking ? hideDetails : showDetails}
            >{cooking ? 'Скрыть детали' : 'Показать детали'}</button>

            {cooking &&
                <div className={s.cooking}>
                    {steps && <Steps steps={steps}/>}
                    {ingredients && <Ingredients ingredients={ingredients}/>}
                </div>
            }
        </div>
    )
}

export default Details;