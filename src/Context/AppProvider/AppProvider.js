import React, { useState, useEffect, useContext, createContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [isSmallSize, setIsSmallSize] = useState(false);

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

    const valueProvider = {
        isSmallSize,
    };
    return <AppContext.Provider value={valueProvider}>{children}</AppContext.Provider>;
}

export function useAppProvider() {
    return useContext(AppContext);
}
