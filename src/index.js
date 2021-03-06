import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css'
import { store } from './_helpers';
import { App } from './App';

// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    
    </Provider>,
    document.getElementById('root')
);