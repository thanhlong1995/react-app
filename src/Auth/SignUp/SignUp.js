import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './SignUp.module.scss';
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from 'firebase/auth';
import { useAuthValue } from '~/Auth/AuthContext/AuthContext';
import { auth } from '~/firebase';

const cx = classnames.bind(styles);

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setTimeActive } = useAuthValue();

    const validatePassword = () => {
        let isValid = true;
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
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
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            setTimeActive(true);
                            navigate('/verify-email');
                            console.log('create ok');
                        })
                        .catch((err) => alert(err.message));
                })
                .catch((err) => setError(err.message));
        }
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <h1 className={cx('title-form')}>Register</h1>
                {error && <div className={cx('auth__error')}>{error}</div>}
                <form onSubmit={register}>
                    <div className={cx('control')}>
                        <label htmlFor="email">E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            required
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={cx('control')}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            required
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={cx('control')}>
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type="password"
                            id="password"
                            value={confirmPassword}
                            required
                            placeholder="Enter your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className={cx('actions')}>
                        <button type="submit">Register</button>
                    </div>
                </form>
                <span>
                    Already have an account?
                    <Link to="/login">login</Link>
                </span>
            </div>
        </div>
    );
};

export default SignUp;
