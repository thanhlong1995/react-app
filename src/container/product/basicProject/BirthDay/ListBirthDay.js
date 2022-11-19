import React, { useState } from 'react';
import { data } from '~/API/product/basicProject/DataBirthDay';
import classNames from 'classnames/bind';
import styles from './ListBirthDay.module.scss';
import BirthDay from './BirthDay';

const cx = classNames.bind(styles);

function ListBirthDay() {
    const [people, setPeople] = useState(data);

    return (
        <>
            <h3>{people.length} birthdays today</h3>
            {people.map((person, index) => (
                <BirthDay person={person} key={index} />
            ))}
            <button onClick={() => setPeople([])}>clear all</button>
        </>
    );
}
export default ListBirthDay;
