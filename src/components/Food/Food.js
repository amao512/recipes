import React from 'react';
import s from './food.module.scss';
import FoodSlider from './FoodSlider/FoodSlider';
import Details from './Details/Details';
import FoodInfo from './FoodInfo/FoodInfo';

const Food = props => {
    return (
        <div>
            <div className="container">
                <div className={s.foodPage}>
                    <FoodInfo {...props}/>
                    <Details steps={props.steps} ingredients={props.ingredients}/>
                    <FoodSlider id={props.id}/>
                </div>
            </div>
        </div>
    )
}

export default Food