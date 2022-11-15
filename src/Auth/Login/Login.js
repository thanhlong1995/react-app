import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import config from '~/config/';
import styles from './Login.module.scss';
import Input from '~/components/UI/Input';
import Loader from '~/components/UI/Loader';
import Button from '~/components/UI/Button';
import { addDocument, generateKeywords } from '~/firebase/services';

const fbProvider = new FacebookAuthProvider();

const cx = classnames.bind(styles);

const Login = () => {
    const email = useRef('');
    const password = useRef('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const auth = getAuth();

    const handleFBLogin = async (provider) => {
        const { additionalUserInfo, user } = await signInWithPopup(
            auth,
            provider,
        );
        if (additionalUserInfo?.isNewUser) {
            console.log('handleFBLogin =' + user);
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <h1 className={cx('title-form')}>Login</h1>
                {error && <div className={cx('auth__error')}>{error}</div>}
                <form>
                    <div className={cx('control')}>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            flexDerection={true}
                            inputRef={email}
                        />
                    </div>
                    <div className={cx('control')}>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            required
                            flexDerection={true}
                            placeholder="Enter your password"
                            inputRef={password}
                        />
                    </div>
                    <div className={cx('actions')}>
                        <Button type="submit" className={cx('btn-signin')}>
                            {isLoading ? <Loader /> : ''}Login
                        </Button>
                    </div>
                </form>
                <div className={cx('social-media-login')}>
                    <div className={cx('social-media-row')}>
                        <div className={cx('social-media-btn')}>
                            <Button className={cx('btn-signin')}>
                                Đăng nhập bằng Google
                            </Button>
                            <Button
                                className={cx('btn-signin')}
                                onClick={handleFBLogin(fbProvider)}>
                                Đăng nhập bằng Facebook
                            </Button>
                        </div>
                    </div>
                    <div className={cx('register-link')}>
                        <span className={cx('comment')}>
                            Don't have and account?&nbsp;
                        </span>
                        <Link
                            to={config.routes.signup}
                            className={cx('comment')}>
                            Create one&nbsp;
                            <span className={cx('link')}>here</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
