import React, { useState } from 'react';
import { data } from '~/API/product/basicProject/DataBirthDay';
import ListBirthDay from '~/container/product/basicProject/BirthDay/ListBirthDay';
import classNames from 'classnames/bind';
import styles from './BirthDay.module.scss';

const cx = classNames.bind(styles);

function BirthDay() {
    const [people, setPeople] = useState(data);
    return (
        <main>
            <section className={cx('container')}>
                <h3>{people.length} birthdays today</h3>
                <ListBirthDay people={people} />
                <button onClick={() => setPeople([])}>clear all</button>
            </section>
        </main>
    );
}

export default BirthDay;
