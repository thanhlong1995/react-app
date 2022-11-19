import React, { useState, createContext } from 'react';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { useSelector } from 'react-redux';
import HandleColorTheme from '~/container/Header/ThemeColor';
import Share from '~/container/Header/Shares';
import { MenuIcon } from '~/components/Icons';
import WrapperPopper from '~/components/UI/Popper/WrapperPopper';
import Logout from '~/Auth/Logout';
import NavMenuList from '~/container/Header/NavMenu/NavMenuList';

const cx = classNames.bind(style);

const Header = (props) => {
    const themeColor = useSelector((state) => state.colorThemeReducer.color);
    const valueProvider = useAppProvider();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleShowMenuPopper = (event) => {
        setIsOpen((prev) => !prev);
        setAnchorEl(event.currentTarget);
    };
    const open = Boolean(anchorEl);

    const clickAwayHandler = () => {
        setIsOpen(false);
    };
    return (
        <header className={cx('main-header', themeColor === 'light' ? 'has-border-bottom' : '')}>
            <div className={cx('main-header-action')}>
                {valueProvider?.isSmallSize &&
                    (props.Page !== '/admin' ? (
                        <div className={cx('main-header-link-icon')} onClick={handleShowMenuPopper}>
                            <MenuIcon />
                            {isOpen && (
                                <WrapperPopper open={open} anchorEl={anchorEl} clickAwayHandler={clickAwayHandler}>
                                    <div className={cx('main-header-small-size-link')}>
                                        <ShowPopper.Provider value={setAnchorEl}>
                                            <NavMenuList className={cx('nav-menu-small-size')} />
                                        </ShowPopper.Provider>
                                    </div>
                                </WrapperPopper>
                            )}
                        </div>
                    ) : (
                        ''
                    ))}
                <HandleColorTheme />
            </div>
            {props.Page === '/admin'
                ? ''
                : !valueProvider?.isSmallSize && (
                      <div className={cx('main-header-link')}>
                          <ShowPopper.Provider value={setAnchorEl}>
                              <NavMenuList />
                          </ShowPopper.Provider>
                      </div>
                  )}
            <div className={cx('main-header-share')}>{props.Page === '/admin' ? <Logout /> : <Share />}</div>
        </header>
    );
};
export const ShowPopper = createContext();
export default Header;
