import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import stockmarketReducer from './categories/categories';
import companiesReducer from './companies/companies';

const reducers = combineReducers({ stockmarketReducer, companiesReducer });
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
