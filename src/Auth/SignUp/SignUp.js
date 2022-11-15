import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from 'firebase/auth';
import { useAuthValue } from '~/Auth/AuthContext/AuthContext';
import { auth } from '~/firebase/config';
import config from '~/config/';
import styles from './SignUp.module.scss';
import Input from '~/components/UI/Input';
import Button from '~/components/UI/Button';

const cx = classnames.bind(styles);

const SignUp = (props) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const email = useRef('');
    const password = useRef('');
    const confirmPassword = useRef('');

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const useAuthProvider = useAuthValue();

    const validatePassword = () => {
        let isValid = true;
        if (
            password.current.value !== '' &&
            confirmPassword.current.value !== ''
        ) {
            if (password.current.value !== confirmPassword.current.value) {
                isValid = false;
                setError('Passwords does not match');
            }
        }
        return isValid;
    };

    const register = (e) => {
        e.preventDefault();
        setError('');
        if (validatePassword()) {
            // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,
            )
                .then(() => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            useAuthProvider?.setTimeActive(true);
                            navigate(config.routes.login);
                        })
                        .catch((err) => alert(err.message));
                })
                .catch((err) => setError(err.message));
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <h1 className={cx('title-form')}>Register</h1>
                {error && <div className={cx('auth__error')}>{error}</div>}
                <form onSubmit={register}>
                    <div className={cx('control')}>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            required
                            flexDerection={true}
                            placeholder="Enter your email"
                            inputRef={email}
                        />
                    </div>
                    <div className={cx('control')}>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            required
                            flexDerection={true}
                            placeholder="Enter your password"
                            inputRef={password}
                        />
                    </div>
                    <div className={cx('control')}>
                        <Input
                            type="password"
                            id="confirm-password"
                            name="Confirm Password"
                            required
                            flexDerection={true}
                            placeholder="Enter your password"
                            inputRef={confirmPassword}
                        />
                    </div>
                    <div className={cx('actions')}>
                        <Button type="submit">Register</Button>
                    </div>
                </form>
                <span>
                    Already have an account?
                    <Link to={config.routes.login} className={cx('link')}>
                        &nbsp;login
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SignUp;
