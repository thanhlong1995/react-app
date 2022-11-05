import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import HandleAction from '~/components/UI/Item/HandleAction';

const cx = classNames.bind(style);

const Home = (props) => {
    return (
        <div className={cx('wrapper')}>
            <HandleAction />
        </div>
    );
};

export default Home;
