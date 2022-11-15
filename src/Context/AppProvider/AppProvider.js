import React, {
    useState,
    useEffect,
    useContext,
    createContext,
    useCallback,
} from 'react';
import * as Service from '~/services/NavModuleService';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [themeColor, setThemeColor] = useState(true);
    const [isSmallSize, setIsSmallSize] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    );

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    }

    useEffect(() => {
        if (windowDimensions.width < 1040) {
            setIsSmallSize(true);
        } else {
            setIsSmallSize(false);
        }
    }, [windowDimensions.width]);

    const [listMenu, setListMenu] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getData = useCallback(async () => {
        try {
            const res = await Service.getAll();
            const listITemResult = [];
            for (const key in res) {
                listITemResult.push({
                    id: key,
                    name: res[key].name,
                    href: res[key].href,
                });
            }
            setListMenu(listITemResult);
        } catch (error) {
            setError(error);
        }
    }, []);

    const valueProvider = {
        themeColor,
        setThemeColor,
        isSmallSize,
        listMenu,
        error,
    };

    return (
        <AppContext.Provider value={valueProvider}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppProvider() {
    return useContext(AppContext);
}
