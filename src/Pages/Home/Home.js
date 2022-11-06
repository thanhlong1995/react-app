import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/UI/Button';
import { ThemeContext } from '../../App';
import Videos from '~/assets/videos';
import {Videos as Player} from '~/components/UI/Videos'

const cx = classNames.bind(styles);

const Home = (props) => {
    const { themeColor } = useContext(ThemeContext);
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
                    className={cx('button', !themeColor ? '' : 'not-theme-color')}
                    onclick={handleOnclickDemo}
                    primary
                >
                    Demo
                </Button>
                <Button
                    className={cx('button', !themeColor ? '' : 'not-theme-color')}
                    onclick={handleOnclickGetStart}
                    primary
                >
                    Get Started&nbsp;<span>▶</span>
                </Button>
            </div>
            <div className={cx('video-introduce')}>
                <Player src={Videos.reactdemo} width="750" height="500" />
            </div>
        </div>
    );
};

export default Home;
