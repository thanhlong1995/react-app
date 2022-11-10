import React, { useState, useEffect, useContext, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../../App';
import * as Service from '~/services/NavModuleService';
import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';
const cx = classNames.bind(styles);

function NavMenu() {
    const { themeColor, isSmallSize, setAnchorEl } = useContext(ThemeContext);
    const [navList, setNavList] = useState([]);
    const [error, setError] = useState(null);
    const [active, setActive] = useState('Home');

    useEffect(() => {
        getNavModule();
    }, [themeColor]);

    const getNavModule = async () => {
        try {
            const result = await Service.getAll();
            const listITemResult = [];
            for (const key in result) {
                listITemResult.push({
                    id: key,
                    name: result[key].name,
                    href: result[key].href,
                });
            }
            setNavList(listITemResult);
        } catch (error) {
            setError(error.message);
        }
    };

    function onClickAcTive(item) {
        setActive(item.name);
        setAnchorEl(null);
    }

    return (
        <div
            className={cx(
                'wrapper',
                !themeColor ? 'wrapper-has-color' : '',
                isSmallSize ? 'isSmallSize' : '',
            )}>
            {navList.length > 0
                ? navList.map((item, index) => (
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
                                  paddingBottom: isActive ? '4px' : '',
                              })}
                              onClick={(item) => onClickAcTive()}>
                              {item.name}
                          </NavLink>
                      </aside>
                  ))
                : error}
        </div>
    );
}
export default memo(NavMenu);
