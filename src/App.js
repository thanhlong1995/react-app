import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLayout } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment } from 'react';

function App() {
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

    return (
        <ThemeContext.Provider
            value={{ themeColor, setThemeColor, isSmallSize }}>
            <Router>
                <div className="App">
                    <Routes>
                        {publicLayout.map((route, index) => {
                            const Page = route.conponent;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    path={route.path}
                                    element={
                                        <Layout Page={route.path}>
                                            <Page />
                                        </Layout>
                                    }
                                    key={index}
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </ThemeContext.Provider>
    );
}
export const ThemeContext = createContext();
export default App;
