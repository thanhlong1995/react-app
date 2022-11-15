import React, { useState, useRef, useContext, memo } from 'react';
import classNames from 'classnames/bind';
import styles from '../ContentTabGetStart.module.scss';
import Form from '~/components/UI/Form';
import WrapperPopper from '~/components/UI/Popper/WrapperPopper';
import * as Service from '~/services/DocReactService';
import Input from '~/components/UI/Input';
import FormatDate from '~/components/UI/FormatDate';

const cx = classNames.bind(styles);

function Popper(props) {
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const contentRef = useRef('');
    const [img, setImage] = useState('');
    const [isloading, setIsLoading] = useState(false);

    var today = new Date();
    const createDate = FormatDate(today);
    const userName = 'LongNT';
    const icon = '</>';

    async function submitHandler(event) {
        event.preventDefault();
        const item = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            content: contentRef.current.value,
            image: img,
            create_date: createDate,
            update_date: '',
            icon: icon,
            creator: userName,
        };
        await Service.post(item);
        setIsLoading(!isloading);
        props.setAnchorEl(null);
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        contentRef.current.value = '';
    }

    const handleClosePopper = () => {
        props.setAnchorEl(null);
    };

    const handleSetImage = (e) => {
        setImage(e);
    };
    return (
        <WrapperPopper
            id={props.id}
            open={props.open}
            anchorEl={props.anchorEl}
            className={cx('wrap-popper')}>
            <div className={cx('main-popper')}>
                <Form
                    submitHandler={submitHandler}
                    handleClosePopper={handleClosePopper}>
                    <Input inputRef={titleRef} name="Title" type="text" />
                    <Input
                        inputRef={descriptionRef}
                        name="Description"
                        type="textarea"
                    />
                    <Input
                        inputRef={contentRef}
                        name="Content"
                        type="textarea"
                    />
                    <Input
                        name="Image"
                        type="file"
                        handleSetImage={handleSetImage}
                    />
                </Form>
            </div>
        </WrapperPopper>
    );
}

export default memo(Popper);
