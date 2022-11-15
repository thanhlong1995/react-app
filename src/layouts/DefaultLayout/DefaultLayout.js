import React from 'react';
import Header from '~/layouts/components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';

const cx = classNames.bind(styles);

function DefaultLayout(props) {
    const valueProvider = useAppProvider();
    return (
        <div className={cx('main')}>
            {props.header === 'none' ? (
                <div className={cx('container')}>
                    <div className="content">{props.children}</div>
                </div>
            ) : (
                <>
                    <Header Page={props.Page} />
                    <div
                        className={cx(
                            'container',
                            !valueProvider?.themeColor ? 'has-theme-color' : '',
                        )}>
                        <div className="content">{props.children}</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default DefaultLayout;
