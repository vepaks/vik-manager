import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import {store} from "./reducers"
import {Provider} from "react-redux";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>,
    </Provider>

);