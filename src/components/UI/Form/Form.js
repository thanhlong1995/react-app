import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './Form.module.scss';
import Button from '~/components/UI/Button';

const cx = classNames.bind(style);

function Form(props) {
return (
        <form onSubmit={props.submitHandler} className={cx('div-form')}>
        <div className={cx('div-input')}>
            {props.listInputFrom.map((value, index) => (
                <div key={index} className={cx('form-input')}>
                    <label className={cx('title')}>{value.name}</label>
                    <input className={cx('input')} placeholder={'Enter ' + value.name} ref={value.input} />
                </div>
            ))}
            </div>
            <div className={cx('div-btn')}>
                <Button
                    className={cx('edit-profile-cancel')}
                    onClick={props.handleClosePopper}>
                    Cancel
                </Button>
                <Button
                    className={cx('btn-submit', props.classes)}
                    disabled={props.isDisable}
                    onClick={props.handleClosePopper}>
                    Save
                </Button>
            </div>
        </form>
    );
}

export default Form;