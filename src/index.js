import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';
import { reducer } from './reducers';
import './index.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
)

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)