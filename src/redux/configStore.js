import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import stockmarketReducer from './categories/categories';

const reducers = combineReducers({ stockmarketReducer });
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
