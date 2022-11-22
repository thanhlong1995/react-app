import React from 'react';
import classNames from 'classnames/bind';
import styles from './ListProject.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Image from '~/components/UI/Image';

const cx = classNames.bind(styles);

function Project({ project }) {
    const themeColor = useSelector((state) => state.colorThemeReducer.color);
    const { id, name, href, image } = project;
    return (
        <NavLink to={href} key={id} className={cx('item')} target="_blank">
            <div className={cx('img-container')}>
                <span className={cx('img-content')}>
                    <Image key={id} src={image} alt="birthday" className={cx('image')} />
                </span>
            </div>
            <footer className={cx(themeColor === 'dark' ? '' : 'theme-color')}>{name}</footer>
        </NavLink>
    );
}

export default Project;
