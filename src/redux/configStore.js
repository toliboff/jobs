import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categoryReducer from './categories/categories';

const reducers = combineReducers({ categoryReducer });
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
