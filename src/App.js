import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLayout } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment } from 'react';

function App() {
    //const [color, setColor] = useState('dark');
    const [themeColor, setThemeColor] = useState(true);

    return (
        <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
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
                                        <Layout>
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
            {/* <main>
                {!isLoggedIn && <Login onLogin={loginHandler} setUserLogin={setUser} />}
                {isLoggedIn && (
                    <Home
                        onLogout={logoutHandler}
                        isLoggedIn={isLoggedIn}
                        logoutHandler={logoutHandler}
                        userLogin={userLogin}
                        themeColor={color}
                        longnlonnlonglonglonglong
                    />
                )}
            </main> */}
        </ThemeContext.Provider>
    );
}
export const ThemeContext = createContext();
export default App;
