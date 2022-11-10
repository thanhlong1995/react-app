import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

function Table(props) {
    return (
        <table id="table" role="table">
            {props.children}
        </table>
    );
}

export default memo(Table);
