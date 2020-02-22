import React, { useState } from 'react';
import s from './foodSlider.module.scss';
import { data } from '../../../../data/foods';
import SliderCard from './SliderCard/SliderCard';
import {CarouselProvider, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const FoodSlider = props => {
    const [foods] = useState(data.food.filter(f => f.id !== props.id));

    return (
        <div>
            <h1>Смотрите также</h1>

            <CarouselProvider
                naturalSlideWidth={150}
                naturalSlideHeight={100}
                totalSlides={foods.length}
                visibleSlides={3}
                className={s.carousel}
                infinite={true}
            >

                <div className={s.btnBack}>
                    <ButtonBack className={s.btn}>
                        <i className="material-icons">arrow_back_ios</i>
                    </ButtonBack>
                </div>

                <SliderCard foods={foods}/>

                <div className={s.btnNext}>
                    <ButtonNext className={s.btn}>
                        <i className="material-icons">arrow_forward_ios</i>
                    </ButtonNext>
                </div> 

            </CarouselProvider>
        </div>
    )
}



export default FoodSlider;