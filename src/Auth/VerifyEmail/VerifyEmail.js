import { useAuthValue } from '~/Auth/AuthContext/AuthContext';
import { useState, useEffect } from 'react';
import { auth } from '~/firebase';
import { sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VerifyEmail.module.scss';

const cx = classNames.bind(styles);

function VerifyEmail() {
    const [time, setTime] = useState(60);
    const { useAuthProvider } = useAuthValue();
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            useAuthProvider?.currentUser
                ?.reload()
                .then(() => {
                    if (useAuthProvider?.currentUser) {
                        clearInterval(interval);
                        navigate('/');
                    }
                })
                .catch((err) => {
                    alert(err.message);
                });
        }, 1000);
    }, [navigate, useAuthProvider?.currentUser]);

    useEffect(() => {
        let interval = null;
        if (useAuthProvider?.timeActive && time !== 0) {
            interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
        } else if (time === 0) {
            useAuthProvider?.setTimeActive(false);
            setTime(60);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [
        useAuthProvider?.timeActive,
        time,
        useAuthProvider.setTimeActive,
        useAuthProvider,
    ]);

    const resendEmailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                useAuthProvider?.setTimeActive(true);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div className={cx('center')}>
            <div className={cx('verifyEmail')}>
                <h1>Verify your Email Address</h1>
                <p>
                    <strong>A Verification email has been sent to:</strong>
                    <br />
                    <span>{useAuthProvider?.currentUser?.email}</span>
                </p>
                <span>
                    Follow the instruction in the email to verify your account
                </span>
                <button
                    onClick={resendEmailVerification}
                    disabled={useAuthProvider?.timeActive}>
                    Resend Email {useAuthProvider?.timeActive && time}
                </button>
            </div>
        </div>
    );
}

export default VerifyEmail;
