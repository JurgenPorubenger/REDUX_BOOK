import React from 'react';
import { rateColor } from '../actions/rateColor'
import { removeColor } from '../actions/removeColor'
import { addColor } from '../actions/addColor'
import store from "../Store";

function Button(props) {
    const myHandler = (e,props) => {
        e.preventDefault();
        // console.log( store.getState().sort ) ;// "SORTED_BY_TITLE"
        store.subscribe(() =>
            console.log('color count:', store.getState().colors.length)
        );
        store.subscribe(() => {
            localStorage.setItem('redux-store',JSON.stringify(store.getState()));
            // localStorage['redux-store'] = JSON.stringify(store.getState())
        });


        // store.dispatch(rateColor("2222e1p5-3abl-0p523-30e4-8001l8yf6666", 14));
        // store.dispatch(removeColor("2222e1p5-3abl-0p523-30e4-8001l8yf6666"));
        store.dispatch(addColor("Hutor","#OIYT99"));

        console.log( store.getState() )

    };
    return (
       <div>
           <button onClick={(e) => myHandler(e,props)}>click</button>
       </div>
    );
}

export default Button;
