import React from 'react';
import { useSelector } from 'react-redux';
import Header from '~/container/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout(props) {
    const colorTheme = useSelector((state) => state.colorThemeReducer.color);
    return (
        <div className={cx('main')}>
            {props.header === 'none' ? (
                <div className={cx('container')}>
                    <div className="content">{props.children}</div>
                </div>
            ) : (
                <>
                    <Header Page={props.Page} />
                    <div className={cx('container', colorTheme === 'light' ? 'has-theme-color' : '')}>
                        <div className="content">{props.children}</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default DefaultLayout;
