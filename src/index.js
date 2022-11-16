import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';
import { StoreProvider } from '~/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StoreProvider>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </StoreProvider>
    </React.StrictMode>,
);
