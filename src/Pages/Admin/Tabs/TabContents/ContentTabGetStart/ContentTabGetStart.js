import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentTabGetStart.module.scss';
import ListITem from './conponents/ListITem';

const cx = classNames.bind(styles);

function ContentTabGetStart() {
    const [action, SetAction] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <ListITem action={action} />
        </div>
    );
}

export default ContentTabGetStart;
