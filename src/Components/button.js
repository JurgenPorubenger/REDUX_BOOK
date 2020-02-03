import React from 'react';
import MainState from "../State/MainState";
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
        console.log( store.getState().sort ) // "SORTED_BY_TITLE"
        store.subscribe(() =>
            console.log('color count:', store.getState().colors.length)
        );
        // console.log(colors(MainState.colors, addColor));
        // console.log(sort(MainState.sort, sortBy));

        console.log(MainState);
        store.dispatch({
            type: "ADD_COLOR",
            id: "2222e1p5-3abl-0p523-30e4-8001l8yf4444",
            title: "Party Grey",
            color: "#F142DD",
            timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
        })
        console.log(
            "Color rating before RATE_COLOR",
            store.getState().colors[0].rating,
            store.getState().colors[1].rating,
            store.getState().colors[2].rating,
            store.getState().colors[3].rating,
        );
        store.dispatch({
            type: "RATE_COLOR",
            id: "2222e1p5-3abl-0p523-30e4-8001l8yf4444",
            rating: 8
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
