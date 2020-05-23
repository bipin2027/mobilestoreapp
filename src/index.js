import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { Provider } from 'react-redux'
import  productsReducer  from './reducers/productsReducer.js'
import userReducer from './reducers/userReducer'
import itemReducer from './reducers/itemsReducer'
import selectItemReducer from './reducers/selectItemReducer'
import thunk from 'redux-thunk'

// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const masterReducer= combineReducers({
  user: userReducer,
  products:productsReducer,
  items:itemReducer,
  selectedItem:selectItemReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(masterReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
