import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './Form.module.scss';
import Button from '~/components/UI/Button';

const cx = classNames.bind(style);

// function Form({
//     children,
//     submitHandler,
//     handleClosePopper,
//     classes,
//     isDisable,
// }) {
function Form({ children }, props) {
    return (
        <form onSubmit={props.submitHandler} className={cx('div-form')}>
            {children}
            <div className={cx('div-btn')}>
                <Button
                    className={cx('edit-profile-cancel')}
                    onClick={props.handleClosePopper}>
                    Cancel
                </Button>
                <Button
                    className={cx('btn-submit', props.classes)}
                    disabled={props.isDisable}
                    type="submit">
                    Save
                </Button>
            </div>
        </form>
    );
}

export default Form;
