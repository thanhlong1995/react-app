import React, { useState, useEffect, useCallback, memo } from 'react';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setTabs, setError } from '~/redux/actions/common/tabHeaderAction';
import classNames from 'classnames/bind';
import styles from './NavMenuList.module.scss';
import * as Service from '~/services/NavModuleService';
import Nav from '~/container/Header/NavMenu/Nav';

const cx = classNames.bind(styles);

function NavMenuList() {
    const valueProvider = useAppProvider();
    const listNavManu = useSelector((state) => state.tabReducer);
    const msgError = useSelector((state) => state.tabError);
    const themeColor = useSelector((state) => state.colorThemeReducer.color);
    const dispatch = useDispatch();

    const [active, setActive] = useState('Home');

    const onClickAcTive = useCallback((nav) => {
        setActive(nav);
    }, []);

    useEffect(() => {
        fetchTabs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchTabs = async () => {
        try {
            const res = await Service.getAll();
            dispatch(setTabs(res));
        } catch (error) {
            dispatch(setError(error));
        }
    };
    return (
        <>
            {msgError.error && <div>{msgError.error}</div>}
            <div
                className={cx(
                    'wrapper',
                    themeColor === 'light' ? 'wrapper-has-color' : '',
                    valueProvider?.isSmallSize ? 'isSmallSize' : '',
                )}>
                {listNavManu.tabs.length > 0
                    ? listNavManu.tabs.map((nav, index) => (
                          <Nav nav={nav} active={active} onClickAcTive={onClickAcTive} key={index} />
                      ))
                    : msgError}
            </div>
        </>
    );
}

export default memo(NavMenuList);
