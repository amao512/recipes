import React from 'react';
import s from './sliderCard.module.scss';
import {Slider, Slide, Image} from 'pure-react-carousel';
import { NavLink } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import loading from '../../../../assets/gif/preview.gif';


const Card = ({ foods }) => {
    return (
        <Slider className={s.slider}>
            {foods.map(food => (
                <NavLink key={food.id} to={'/recipes/' + food.category + '/food/' + food.slug}>
                    <Slide index={food.index} className={s.slide} >
                        <div>
                            <Image src={food.img || loading} className={s.slideImg} alt={'slideImg'}/>
                            
                            <div className={s.foodTitle}>
                                <span>{food.title}</span>
                            </div>
                        </div>
                    </Slide>
                </NavLink>
            ))}
        </Slider>
    )
}

export default Card;