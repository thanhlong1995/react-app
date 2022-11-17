import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tours.module.scss';
import ListTour from '~/container/product/basicProject/tour/ListTour';

const cx = classNames.bind(styles);

function Tours() {
    return (
        <main>
            <ListTour />
        </main>
    );
}

export default Tours;
