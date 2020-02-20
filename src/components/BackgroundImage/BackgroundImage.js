import React from 'react';
import s from './backgroundImage.module.scss';
import { Slide } from 'react-slideshow-image';

import img1 from '../../assets/images/ezhevika_iagody_lozhka_142705_1920x1080.jpg';
import img2 from '../../assets/images/kofe_kruzhka_stol_121545_1920x1080.jpg';
import img3 from '../../assets/images/syr_myaso_ovoshchi_uzhin_107933_1920x1080.jpg';

const slideImages = [img1, img2, img3];

const properties = {
    duration: 10000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
}

const BackgroundImage = () => {
    return (
        <div className={s.slideContainer}>
            <Slide {...properties}>
                <div className={s.eachSlide}>
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    </div>
                </div>
                <div className={s.eachSlide}>
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    </div>
                </div>
                <div className={s.eachSlide}>
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default BackgroundImage;