import React, { useState, useEffect, useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../../App';
import * as Service from '~/services/NavModuleService';
import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';

const cx = classNames.bind(styles);

function NavMenu() {
    const { themeColor } = useContext(ThemeContext);
    const [navList, setNavList] = useState([]);
    const [error, setError] = useState(null);
    const [active, setActive] = useState('Home');

    useEffect(() => {
        getNavModule();
    }, []);

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

    return (
        <div className={cx('wrapper', !themeColor ? 'wrapper-has-color' : '')}>
            {navList.length > 0
                ? navList.map((item, index) => (
                      <aside className={cx('nav-link', active === item.name && 'is-active')} key={index}>
                          <Link to={item.href} className={cx('item-link')} onClick={() => setActive(item.name)}>
                              {item.name}
                          </Link>
                      </aside>
                  ))
                : error}
        </div>
    );
}

export default memo(NavMenu);
