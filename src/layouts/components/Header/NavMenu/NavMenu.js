import React, { useState, useCallback, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';
import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';
import Fetcher from '~/API/Header/Fetcher';

const cx = classNames.bind(styles);

function NavMenu() {
    const valueProvider = useAppProvider();
    const [active, setActive] = useState('Home');

    const onClickAcTive = useCallback((item) => {
        setActive(item);
    }, []);

    return (
        <Fetcher>
            {({ listNavManu, msgError }) => {
                if (msgError) {
                    return <div>{msgError}</div>;
                }
                return (
                    <div
                        className={cx(
                            'wrapper',
                            !valueProvider?.themeColor ? 'wrapper-has-color' : '',
                            valueProvider?.isSmallSize ? 'isSmallSize' : '',
                        )}>
                        {listNavManu.length > 0
                            ? listNavManu.map((item, index) => (
                                  <aside className={cx('nav-link', active === item.name && 'is-active')} key={index}>
                                      <NavLink
                                          to={item.href}
                                          style={({ isActive }) => ({
                                              borderBottom: isActive ? '1px solid #ec5990' : '',
                                              paddingBottom: isActive ? '4px' : '',
                                          })}
                                          onClick={() => onClickAcTive(item.name)}>
                                          {item.name}
                                      </NavLink>
                                  </aside>
                              ))
                            : msgError}
                    </div>
                );
            }}
        </Fetcher>
    );
}

export default memo(NavMenu);
