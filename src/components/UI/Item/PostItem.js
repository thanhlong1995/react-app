import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './Item.module.scss';
import Button from '~/components/UI/Button';

const cx = classNames.bind(style);

function PostItem(props) {
    return (
        <form onSubmit={props.submitHandler} className={cx('div-form')}>
            <div className={cx('div-input')}>
                <div className={cx('form-input')}>
                    <label className={cx('title')}>Title</label>
                    <input className={cx('input')} placeholder="Enter title" ref={props.titleRef} />
                </div>
                <div className={cx('form-input')}>
                    <label className={cx('title')}>Price</label>
                    <input className={cx('input')} placeholder="Enter price" ref={props.priceRef} />
                </div>
            </div>
            <div className={cx('div-input')}>
                <div className={cx('form-input')}>
                    <label className={cx('title')}>Description</label>
                    <input className={cx('input')} placeholder="Enter description" ref={props.descriptionRef} />
                </div>
            </div>
            <div className={cx('div-btn')}>
                <Button type="submit">Add Expense</Button>
            </div>
        </form>
    );
}

export default PostItem;
