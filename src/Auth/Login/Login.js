import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Login.module.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthValue } from '~/Auth/AuthContext/AuthContext';
import {
    signInWithEmailAndPassword,
    sendEmailVerification,
} from 'firebase/auth';
import { auth } from '~/firebase';

const cx = classnames.bind(styles);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setTimeActive } = useAuthValue();
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                if (!auth.currentUser.emailVerified) {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            setTimeActive(true);
                            navigate('/verify-email');
                        })
                        .catch((err) => alert(err.message));
                } else {
                    navigate('/');
                }
            })
            .catch((err) => setError(err.message));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <h1 className={cx('title-form')}>Login</h1>
                {error && <div className={cx('auth__error')}>{error}</div>}
                <form onSubmit={login}>
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
                    <div className={cx('actions')}>
                        <button type="submit">Login</button>
                    </div>
                </form>
                <p className={cx('register-link')}>
                    Don't have and account?
                    <Link to="/signup">Create one here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
