import React, { useState, useEffect, useContext, createContext } from 'react';
import { ThemeContext } from '../../../App';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import HandleColorTheme from '~/layouts/components/ThemeColor';
import NavMenu from './NavMenu';
import Share from '~/layouts/components/Header/Shares';
import Button from '~/components/UI/Button';
import { MenuIcon } from '~/components/Icons';
import WrapperPopper from '~/components/UI/Popper/WrapperPopper';

const cx = classNames.bind(style);

const Header = (props) => {
    const { themeColor, isSmallSize } = useContext(ThemeContext);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isEvent, setIsEvent] = useState();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'wrap-popper' : undefined;

    const hanldleLogout = () => {};

    const handleShowMenuPopper = (event) => {
        setIsShowMenu(true);
        setIsEvent(event.currentTarget);
    };

    useEffect(() => {
        setAnchorEl(anchorEl ? null : isEvent);
    }, [isEvent, isShowMenu]);

    return (
        <header
            className={cx(
                'main-header',
                !themeColor ? 'has-border-bottom' : '',
            )}>
            <div className={cx('main-header-action')}>
                {isSmallSize &&
                    (props.Page !== '/admin' ? (
                        <div
                            className={cx('main-header-link-icon')}
                            onClick={handleShowMenuPopper}>
                            <MenuIcon />
                            {isShowMenu && (
                                <WrapperPopper
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}>
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
                : !isSmallSize && (
                      <div className={cx('main-header-link')}>
                          <ShowPopper.Provider value={setAnchorEl}>
                              <NavMenu />
                          </ShowPopper.Provider>
                      </div>
                  )}
            <div className={cx('main-header-share')}>
                {props.Page === '/admin' ? (
                    <Button
                        className={cx('btn-logout')}
                        onClick={hanldleLogout}>
                        Logout
                    </Button>
                ) : (
                    <Share />
                )}
            </div>
        </header>
    );
};
export const ShowPopper = createContext();
export default Header;
