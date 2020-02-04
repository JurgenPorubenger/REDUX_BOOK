import React from 'react';
import { color } from "../reducers/color";
import { colors } from "../reducers/colors";
import { sort } from "../reducers/sort";
import { addColor } from "../actions/addColor"
import { rateColor } from "../actions/rateColor"
import { sortBy } from "../actions/sortColor"
import { createStore, combineReducers } from 'redux'

import store from "../Store";

function Button(props) {
    const myHandler = (e,props) => {
        // console.log(color)
        e.preventDefault();
        console.log( store.getState().sort ) ;// "SORTED_BY_TITLE"
        store.subscribe(() =>
            console.log('color count:', store.getState().colors.length)
        );
        store.subscribe(() => {
            localStorage.setItem('redux-store',JSON.stringify(store.getState()));
            // localStorage['redux-store'] = JSON.stringify(store.getState())
        });

        store.dispatch({
            type: "ADD_COLOR",
            id: "2222e1p5-3abl-0p523-30e4-8001l8yf6666",
            title: "Booty LOLO",
            color: "#F142DD",
            timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
        });

        store.dispatch({
            type: "RATE_COLOR",
            id: "2222e1p5-3abl-0p523-30e4-8001l8yf6666",
            rating: 4
        });

        console.log( store.getState() )

    };
    return (
       <div>
           <button onClick={(e) => myHandler(e,props)}>click</button>
       </div>
    );
}

export default Button;
