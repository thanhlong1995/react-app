import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './Input.module.scss';

const cx = classNames.bind(style);

function Input(props) {
    const hidden = 'hidden';
    const [img, setImg] = useState();

    const handlePreviewImage = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImg(file);
        props.handleSetImage(file.preview);
    };

    return (
        <div className={cx('content')}>
            {props.type === hidden ? (
                ''
            ) : (
                <div
                    className={cx(
                        'form-input',
                        props.flexDerection ? 'flex-derection' : '',
                    )}>
                    <label className={cx('title')}>{props.name}</label>
                    {props.type === 'textarea' && (
                        <textarea
                            className={cx('textarea')}
                            placeholder={'Enter ' + props.name}
                            ref={props.inputRef}
                            type={props.type}
                        />
                    )}
                    {props.type === 'file' && (
                        <input
                            placeholder={'Enter ' + props.name}
                            type={props.type}
                            onChange={handlePreviewImage}
                        />
                    )}
                    {props.type === 'text' && (
                        <input
                            className={cx('input')}
                            placeholder={'Enter ' + props.name}
                            ref={props.inputRef}
                            type={props.type}
                            autoComplete="on"
                        />
                    )}
                    {props.type === 'email' && (
                        <input
                            className={cx('input')}
                            placeholder={'Enter ' + props.name}
                            ref={props.inputRef}
                            type={props.type}
                        />
                    )}
                    {props.type === 'password' && (
                        <input
                            className={cx('input')}
                            placeholder={'Enter ' + props.name}
                            ref={props.inputRef}
                            type={props.type}
                        />
                    )}
                    {img && (
                        <img src={img.preview} alt="" width="100" height="50" />
                    )}
                </div>
            )}
        </div>
    );
}

export default Input;
