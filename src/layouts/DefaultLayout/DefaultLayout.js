import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '~/layouts/components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';

const cx = classNames.bind(styles);

function DefaultLayout(props) {
    const colorTheme = useSelector((state) => state.colorThemeReducer.color);
    console.log('DefaultLayout = ' + colorTheme);
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
