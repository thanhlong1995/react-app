import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { DesktopLogo } from '~/components/Icons';
import Button from '~/components/UI/Button';

const cx = classNames.bind(styles);

const Home = (props) => {
    const handleOnclickDemo = () => {};
    const handleOnclickGetStart = () => {};

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-home-page')}>
                <h1 className={cx('title')}>REACT FUNCTION COMPONENTS</h1>
                <span className={cx('desciption')}>
                    Performant, flexible and extensible forms with easy-to-use
                    validation.
                </span>
            </div>
            <div className={cx('button-module')}>
                <Button
                    className={cx('button')}
                    onclick={handleOnclickDemo}
                    primary
                >
                    Demo
                </Button>
                <Button
                    className={cx('button')}
                    onclick={handleOnclickGetStart}
                    primary
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export default Home;
