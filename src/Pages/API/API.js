import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './API.module.scss';
import HandleAction from '~/components/UI/Item/HandleAction';

const cx = classNames.bind(style);

const API = (props) => {
    return (
        <div className={cx('wrapper')}>
            <HandleAction />
        </div>
    );
};

export default API;
