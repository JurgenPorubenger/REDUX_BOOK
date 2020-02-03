import MainState from "./State/MainState";
import { color } from "./reducers/color";
import { colors } from "./reducers/colors";
import { sort } from "./reducers/sort";
import { addColor } from "./actions/addColor"
import { rateColor } from "./actions/rateColor"
import { sortBy } from "./actions/sortColor"
import { createStore, combineReducers } from 'redux'

const initialState = MainState;

const store = createStore(
    combineReducers({ colors, sort }), initialState
);
export default store;

