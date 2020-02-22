import React from 'react';
import loading from '../../assets/gif/OVTb.gif';
import s from './loading.module.scss';

const Loading = () => {
    return <img className={s.loading} src={loading} alt='loading' />
}

export default Loading;