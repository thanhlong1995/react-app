import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';
import { StoreProvider } from '~/store';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <StoreProvider>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </StoreProvider>
        </Provider>
    </React.StrictMode>,
);
