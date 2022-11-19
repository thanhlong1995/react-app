import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavMenuList.module.scss';

const cx = classNames.bind(styles);

function Nav(props) {
    const { nav, active, onClickAcTive } = props;
    const { id, name, href } = nav;

    return (
        <aside className={cx('nav-link', active === name && 'is-active')} key={id}>
            <NavLink
                to={href}
                style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid #ec5990' : '',
                    paddingBottom: isActive ? '4px' : '',
                })}
                onClick={() => onClickAcTive(name)}>
                {name}
            </NavLink>
        </aside>
    );
}

export default Nav;
