import React from 'react';
import classNames from 'classnames/bind';
import styles from './GetStart.module.scss';
import DataDocReact from './GetDocReact';

const cx = classNames.bind(styles);

function GetStart() {
    const isMenu = true;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-getstart-page')}>
                <h1 className={cx('title')}>Get Started</h1>
                <span className={cx('desciption')}>
                    Một thư viện JavaScript xây dựng giao diện người dùng
                </span>
            </div>
            <div className={cx('main')}>
                <div className={cx('div-module-menu')}>
                    <aside className={cx('module-menu')}>
                        <div className={cx('div-menu')}>
                            <div className={cx('title-list')}>
                                <h4 className={cx('typography')}>Menu</h4>
                            </div>
                            <div className={cx('menu-list')}>
                                <DataDocReact isMenu={isMenu} />
                            </div>
                        </div>
                    </aside>
                </div>
                <div className={cx('content')}>
                    <DataDocReact />
                </div>
            </div>
        </div>
    );
}

export default GetStart;
