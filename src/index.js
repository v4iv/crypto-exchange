import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import './assets/css/font-awesome.min.css';
import './assets/css/bulma.min.css';
import './assets/css/main.css';
import 'react-table/react-table.css'
import App from './app';
import configureStore from './core/store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App onUpdate={() => window.scrollTo(0, 0)}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();