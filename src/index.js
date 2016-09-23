import React from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './containers/App'
import allReducers from './reducers'

const store = createStore(allReducers);

export default Main = ()=>{
    return (
        <Provider store = {store}>
            <App/>
        </Provider>
    );
};
