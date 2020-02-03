
import C from "../actions/actionTypes";
// import {addColor} from "../actions/addColor"
// import mainState from "../State/MainState"

export const color = (state={}, action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            };
        case C.RATE_COLOR:
            return (state.id===action.id)?
                 {
                    ...state,
                    rating: action.rating
                }:
                state;
        default: return state;
    }
};

export const colors = (state=[], action) => {
    return []
};
export const sort = (state="SORTED_BY_DATE", action) => {
    return ""
};

// console.log(color(mainState,addColor));

