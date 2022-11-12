import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './SignUp.module.scss';

const cx = classnames.bind(styles);

const SignUp = (props) => {
    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');
    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefaut();
        const enterEmail = emailInputRef.current.value;
        const enterPassword = passwordInputRef.current.value;

        if (isLogin) {
        } else {
            fetch(
                'https://react-tutorial-212d0-default-rtdb.firebaseio.com/:',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enterEmail,
                        password: enterPassword,
                        returnSecureToken: true,
                    }),
                    headers: {
                        'Content-type': 'application/json',
                    },
                },
            ).then((res) => {
                if (res.ok) {
                    console.log(res.ok);
                } else {
                    res.json().then((data) => {
                        console.log(data);
                    });
                }
            });
        }
    };
    return (
        <div className={cx('login')}>
            <form onSubmit={submitHandler}>
                <div className={cx('control')}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        required
                        ref={emailInputRef}
                    />
                </div>
                <div className={cx('control')}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div className={cx('actions')}>
                    <button type="submit">
                        {isLogin ? 'Login' : 'Create Account'}
                    </button>
                    <button
                        type="submit"
                        className={cx('toggle')}
                        onClick={switchAuthModeHandler}>
                        {isLogin
                            ? 'Create new account'
                            : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
