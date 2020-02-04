import initialState from "./State/initialState";
import { colors } from "./reducers/colors";
import { sort } from "./reducers/sort";
import { createStore, combineReducers } from 'redux'

// const store = createStore(
//     combineReducers({ colors, sort }), initialState
// );
const store = createStore(
    combineReducers({ colors, sort }), (localStorage.getItem('redux-store')) ?
        JSON.parse(localStorage['redux-store']) :
        {}
);
export default store;

