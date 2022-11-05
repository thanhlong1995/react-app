import React, { useContext } from 'react';
import { ThemeContext } from '../../../App';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import HandleColorTheme from '~/layouts/components/ThemeColor';
import NavMenu from './NavMenu';

const cx = classNames.bind(style);

const Header = (props) => {
    const { themeColor } = useContext(ThemeContext);
    return (
        <header className={cx('main-header', !themeColor ? 'has-border-bottom' : '')}>
            <div className={cx('main-header-action')}>
                <HandleColorTheme />
            </div>
            <div className={cx('main-header-link')}>
                <NavMenu />
            </div>
            <div className={cx('main-header-github')}></div>
        </header>
    );
};

export default Header;
