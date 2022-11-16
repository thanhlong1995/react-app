import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLayout, privateLayout, productLayout } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment } from 'react';
import { AppProvider } from '~/Context/AppProvider/AppProvider';
import PrivateRoute from '~/routes/PrivateRoute';

function App() {
    return (
        <AppProvider>
            <Router>
                <div>
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
                                            header={route.header}>
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
                                        <PrivateRoute>
                                            <Layout
                                                Page={route.path}
                                                header={route.header}>
                                                <Page />
                                            </Layout>
                                        </PrivateRoute>
                                    }
                                    key={index}
                                />
                            );
                        })}
                        {productLayout.map((route, index) => {
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
                                        <PrivateRoute>
                                            <Layout
                                                Page={route.path}
                                                header={route.header}>
                                                <Page />
                                            </Layout>
                                        </PrivateRoute>
                                    }
                                    key={index}
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
}
export default App;
