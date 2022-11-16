import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Tours.module.scss';
import ListTour from '~/container/product/basicProject/tour/ListTour';

const cx = classNames.bind(styles);

function Tours() {
    return (
        <main>
            <section className={cx('container')}>
                <h3>Our Tours</h3>
                <ListTour />
            </section>
        </main>
    );
}

export default Tours;
