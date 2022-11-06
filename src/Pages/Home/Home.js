import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import {DesktopLogo} from '~/components/Icons'

const cx = classNames.bind(style);

const Home = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-home-page')}>
                <h1>REACT FUNCTION COMPONENTS</h1>
            </div>
        </div>
    );
};

export default Home;
