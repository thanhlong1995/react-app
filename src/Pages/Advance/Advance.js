import React, { useReducer } from 'react';
import classNames from 'classnames/bind';
import styles from './Advance.module.scss';
import Input from '~/components/UI/Input';
import Button from '~/components/UI/Button';

const cx = classNames.bind(styles);
// initState
// action
// reducer
// dispatch

// initState
const initState = 0;

// action
const SET_DOWN = 'setDown';
const SET_UP = 'setUp';

//reducer
const reducer = (state, action) => {
    console.log(state);
    switch (action) {
        case SET_DOWN:
            return state - 1;
        case SET_UP:
            return state + 1;
        default:
            throw new Error('invalid');
    }
};

var personObj1 = {
    name: 'Alex',
    age: 30,
};

var person = personObj1;
person.age = 25;

person = {
    name: 'John',
    age: 50,
};

var personObj2 = person;

var obj = { first: 'reference' };
obj = { second: 'ref2' };

console.log(obj); //(1)

function Advance() {
    const [count, dispatch] = useReducer(reducer, initState);
    return (
        <div className={cx('wrapper')}>
            <div>{count}</div>
            <div>
                <Button onClick={() => dispatch(SET_DOWN)}>Down</Button>
                <Button onClick={() => dispatch(SET_UP)}>Up</Button>
            </div>
        </div>
    );
}

export default Advance;
