import React from 'react';
import ListBirthDay from '~/container/product/basicProject/BirthDay/ListBirthDay';
import classNames from 'classnames/bind';
import styles from './BirthDay.module.scss';

const cx = classNames.bind(styles);

function BirthDay() {
    return (
        <main>
            <section className={cx('container')}>
                <ListBirthDay />
            </section>
        </main>
    );
}

export default BirthDay;
