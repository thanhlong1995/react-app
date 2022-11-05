import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '~/components/UI/Button';
import * as service from '~/services/UserService';
import Error from './Error';
import classnames from 'classnames/bind';
import style from './Login.module.css';

const cx = classnames.bind(style);

const schema = yup
    .object({
        email: yup.string().required(),
        password: yup.number().positive().integer().required(),
    })
    .required();

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [listUser, setListUser] = useState({});
    const [isConfirm, setIsConfirm] = useState(false);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        const fetchGetApi = async () => {
            const result = await service.getAll();
            setListUser(result);
        };
        fetchGetApi();
    }, []);

    const onSubmit = async (data) => {
        console.log(data.email);
        // eslint-disable-next-line array-callback-return
        listUser.map((user) => {
            if (data.email === user.email && data.password === user.password) {
                props.onLogin(data.email, data.password);
                props.setUserLogin(user.userName);
                localStorage.setItem('user', user);
            } else {
                setIsConfirm(true);
            }
        });
    };

    return (
        <div className={cx('login')}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {isConfirm && <Error />}
                <div className={cx('control')}>
                    <label htmlFor="email">E-Mail</label>
                    <input {...register('email')} />
                </div>
                <div className={cx('control')}>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} type="password" />
                </div>
                <div className={cx('actions')}>
                    <Button type="submit" className={cx('btn-login')}>
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Login;
