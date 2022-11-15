import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/UI/Button';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';
import Videos from '~/assets/videos';
import Video from '~/components/UI/Video';

const cx = classNames.bind(styles);

const Home = (props) => {
    const valueProvider = useAppProvider();
    const handleOnclickDemo = () => {};
    const handleOnclickGetStart = () => {};

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-home-page')}>
                <h1 className={cx('title')}>React Function component</h1>
                <span className={cx('desciption')}>
                    Performant, flexible and extensible forms with easy-to-use
                    validation.
                </span>
            </div>
            <div className={cx('button-module')}>
                <Button
                    className={cx(
                        'button',
                        !valueProvider?.themeColor ? '' : 'not-theme-color',
                    )}
                    onClick={handleOnclickDemo}
                    primary>
                    Demo
                </Button>
                <Button
                    className={cx(
                        'button',
                        !valueProvider?.themeColor ? '' : 'not-theme-color',
                    )}
                    onClick={handleOnclickGetStart}
                    primary>
                    Get Started&nbsp;<span>▶</span>
                </Button>
            </div>
            <div className={cx('video-introduce')}>
                <Video src={Videos.reactdemo} width="750" height="500" />
            </div>
        </div>
    );
};

export default Home;
