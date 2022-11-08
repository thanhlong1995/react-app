import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from '../ContentTabGetStart.module.scss';
import Form from '~/components/UI/Form';
import WrapperPopper from '~/components/UI/Popper/WrapperPopper';
import * as Service from '~/services/DocReactService';

const cx = classNames.bind(styles);

function Popper(props) {
    const iconRef = useRef('');
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const dataRef = useRef('');
    const createDateRef = useRef('');
    const creatorRef = useRef('');

    const [listInputFrom, setListInputForm] = useState([
        {
            input: iconRef,
            name: 'Icon',
        },
        {
            input: titleRef,
            name: 'Title',
        },
        {
            input: descriptionRef,
            name: 'Description',
        },
        {
            input: dataRef,
            name: 'Data',
        },
        {
            input: createDateRef,
            name: 'CreateDate',
        },
        {
            input: creatorRef,
            name: 'Creator',
        }
    ])

    async function submitHandler(event) {
        event.preventDefault();
console.log(event)
        const item = {
                icon: iconRef.current.value,
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                data: dataRef.current.value,
                createDate: createDateRef.current.value,
                creator: creatorRef.current.value
        };
        console.log('iconRef.current.value ' + iconRef.current.value)
        await Service.post(item);
        
        iconRef.current.value = '';
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        dataRef.current.value = '';
        createDateRef.current.value = '';
        creatorRef.current.valu = '';
    }


    return (
        <WrapperPopper
            id={props.id}
            open={props.open}
            anchorEl={props.anchorEl}
            className={cx('wrap-popper')}>
            <div className={cx('main-popper')}>
                <Form
                    listInputFrom={listInputFrom}
                    submitHandler={submitHandler}
                    handleClosePopper={props.handleClosePopper}
                />
            </div>
        </WrapperPopper>
    );
}

export default Popper;
