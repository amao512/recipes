import React from 'react';
import s from './steps.module.scss';
import loading from '../../../../assets/gif/preview.gif';

const Steps = ({ steps }) => {
    return (
        <div className={s.steps}>
            {steps.map(step => (
                <div key={step.id} className={s.eachStep}>
                    <div className={s.image}>
                        <img src={step.img || loading} alt='step-img'/> 
                    </div>
                    <div className={s.info}>
                      <p className={s.step}>STEP {step.step}</p>
                      <span className={s.instruction}>{step.instruction}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Steps;