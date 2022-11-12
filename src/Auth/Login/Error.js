import React from 'react';
import classnames from 'classnames/bind';
import style from './Login.module.scss';

const cx = classnames.bind(style);
function Error() {
    return (
        <div className={cx('div-error')}>
            <h2 className={cx('error-msg')}>Email or password is incorrect</h2>
        </div>
    );
}

export default Error;
