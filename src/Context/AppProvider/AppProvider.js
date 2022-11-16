import React, { useState, useEffect, useContext, createContext, useCallback } from 'react';
import { getDataProjectInfo } from '~/API/product/projectInfo/getDataProjectInfo';
import { getDataNavHeader } from '~/API/Header/getDataNavHeader';
import { getDataTour } from '~/API/product/tours/Tours';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [themeColor, setThemeColor] = useState(true);
    const [isSmallSize, setIsSmallSize] = useState(false);
    const [listDataProjectInfo, setListDataProjectInfo] = useState([]);
    const [listNavManu, setListNavManu] = useState([]);
    const [listDataTour, setListDataTour] = useState([]);
    const [msgError, setMsgError] = useState('');

    // Get size creeen
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    // getWindowDimensions
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    }

    // set setIsSmallSize
    useEffect(() => {
        if (windowDimensions.width < 1040) {
            setIsSmallSize(true);
        } else {
            setIsSmallSize(false);
        }
    }, [windowDimensions.width]);

    useEffect(() => {
        getDataNavMenu(setListNavManu, setMsgError);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get data NavHeader
    const getDataNavMenu = useCallback(async (setListNavManu, setMsgError) => {
        getDataNavHeader(setListNavManu, setMsgError);
    }, []);

    useEffect(() => {
        getDataProject(setListDataProjectInfo, setMsgError);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get data Project
    const getDataProject = useCallback(async (setListDataProjectInfo, setMsgError) => {
        getDataProjectInfo(setListDataProjectInfo, setMsgError);
    }, []);

    useEffect(() => {
        getDataTour(setListDataTour, setMsgError);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // get data Tour
    const getDataTour = useCallback(async (setListDataTour, setMsgError) => {
        getDataTour(setListDataTour, setMsgError);
    }, []);

    const valueProvider = {
        themeColor,
        setThemeColor,
        isSmallSize,
        listNavManu,
        listDataProjectInfo,
        listDataTour,
        msgError,
    };
    console.log(listDataProjectInfo);
    return <AppContext.Provider value={valueProvider}>{children}</AppContext.Provider>;
}

export function useAppProvider() {
    return useContext(AppContext);
}
