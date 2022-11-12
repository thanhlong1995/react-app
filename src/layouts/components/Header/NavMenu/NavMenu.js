import React, { useState, useContext, useCallback, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../../App';
import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';
import Fetcher from '~/API/Header/Fetcher';

const cx = classNames.bind(styles);

function NavMenu() {
    const { themeColor, isSmallSize } = useContext(ThemeContext);
    const [active, setActive] = useState('Home');

    const onClickAcTive = useCallback(async (item) => {
        setActive(item);
    }, []);

    return (
        <Fetcher>
            {({ listMenu, error }) => {
                if (error) {
                    return <div>{error}</div>;
                }
                return (
                    <div
                        className={cx(
                            'wrapper',
                            !themeColor ? 'wrapper-has-color' : '',
                            isSmallSize ? 'isSmallSize' : '',
                        )}>
                        {listMenu.length > 0
                            ? listMenu.map((item, index) => (
                                  <aside
                                      className={cx(
                                          'nav-link',
                                          active === item.name && 'is-active',
                                      )}
                                      key={index}>
                                      <NavLink
                                          to={item.href}
                                          style={({ isActive }) => ({
                                              borderBottom: isActive
                                                  ? '1px solid #ec5990'
                                                  : '',
                                              paddingBottom: isActive
                                                  ? '4px'
                                                  : '',
                                          })}
                                          onClick={() =>
                                              onClickAcTive(item.name)
                                          }>
                                          {item.name}
                                      </NavLink>
                                  </aside>
                              ))
                            : error}
                    </div>
                );
            }}
        </Fetcher>
    );
}

export default memo(NavMenu);
