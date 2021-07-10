import { createStore } from 'redux';
import RootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

function configureStore()
{

    const composedEnhancers = process.env.NODE_ENV !== "production" ? composeWithDevTools : compose;
    const store = createStore(RootReducer, composedEnhancers(applyMiddleware(thunk)));

    return store;
}

export default configureStore;