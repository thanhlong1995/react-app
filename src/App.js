import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLayout, privateLayout } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from '~/Auth/AuthContext/AuthContext';
import PrivateRoute from '~/routes/PrivateRoute';

function App() {
    const [themeColor, setThemeColor] = useState(true);
    const [isSmallSize, setIsSmallSize] = useState(false);

    const [currentUser, setCurrentUser] = useState(null);
    const [timeActive, setTimeActive] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
    }, []);

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
        <AuthProvider value={(currentUser, timeActive, setTimeActive)}>
            <ThemeContext.Provider
                value={{
                    themeColor,
                    setThemeColor,
                    isSmallSize,
                }}>
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
                                            <Layout
                                                Page={route.path}
                                                Header={route.header}>
                                                <Page />
                                            </Layout>
                                        }
                                        key={index}
                                    />
                                );
                            })}
                            {privateLayout.map((route, index) => {
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
                                            <Layout
                                                Page={route.path}
                                                header={route.header}>
                                                <PrivateRoute>
                                                    <Page />
                                                </PrivateRoute>
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
        </AuthProvider>
    );
}
export const ThemeContext = createContext();
export default App;
