import React, { useState, useContext, createContext } from 'react';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import HandleColorTheme from '~/layouts/components/ThemeColor';
import NavMenu from './NavMenu';
import Share from '~/layouts/components/Header/Shares';
import { MenuIcon } from '~/components/Icons';
import WrapperPopper from '~/components/UI/Popper/WrapperPopper';
import Logout from '~/Auth/Logout';

const cx = classNames.bind(style);

const Header = (props) => {
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
        <header
            className={cx(
                'main-header',
                !valueProvider?.themeColor ? 'has-border-bottom' : '',
            )}>
            <div className={cx('main-header-action')}>
                {valueProvider?.isSmallSize &&
                    (props.Page !== '/admin' ? (
                        <div
                            className={cx('main-header-link-icon')}
                            onClick={handleShowMenuPopper}>
                            <MenuIcon />
                            {isOpen && (
                                <WrapperPopper
                                    open={open}
                                    anchorEl={anchorEl}
                                    clickAwayHandler={clickAwayHandler}>
                                    <div
                                        className={cx(
                                            'main-header-small-size-link',
                                        )}>
                                        <ShowPopper.Provider
                                            value={setAnchorEl}>
                                            <NavMenu
                                                className={cx(
                                                    'nav-menu-small-size',
                                                )}
                                            />
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
                              <NavMenu />
                          </ShowPopper.Provider>
                      </div>
                  )}
            <div className={cx('main-header-share')}>
                {props.Page === '/admin' ? <Logout /> : <Share />}
            </div>
        </header>
    );
};
export const ShowPopper = createContext();
export default Header;
