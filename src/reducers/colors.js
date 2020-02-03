
import C from "../actions/actionTypes";
import { color } from "../reducers/color";
// import {addColor} from "../actions/addColor"
// import mainState from "../State/MainState"

export const colors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR :
            return [
                ...state,
                color({}, action)
            ];
        case C.RATE_COLOR :return state.map(
            c => color(c, action)
        );
        case C.REMOVE_COLOR :
            return state.filter(
                c => c.id !== action.id
            );
        default:
            return state
    }
};

// export const colors = (state=[], action) => {
//     return []
// };
// export const sort = (state="SORTED_BY_DATE", action) => {
//     return ""
// };

// console.log(color(mainState,addColor));

