import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/UI/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setGrocery } from '~/redux/actions/product/groceryAction';
import styles from './GroceryBud.module.scss';
import { ADD_SUCCESS, DELETE_SUCCESS, EDIT_SUCCESS } from '~/components/Constant';

const cx = classNames.bind(styles);

function GroceryBud() {
    const listGrocery = useSelector((state) => state.groceryReducer.grocerys);
    const [alert, setAlert] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleSubmit = () => {
        dispatch(setGrocery(inputRef.current.value));
        inputRef.current.focus();
    };

    console.log(listGrocery);
    return (
        <aside className={cx('section-center')}>
            <form onSubmit={handleSubmit} className={cx('form-control')}>
                <input type="text" ref={inputRef} className={cx('input')} placeholder=" e.g. eggs" />
                <Button type="submit">Submit</Button>
            </form>
        </aside>
    );
}

export default GroceryBud;
