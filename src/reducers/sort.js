
import C from "../actions/actionTypes";

export const sort = (state = "SORTED_BY_DATE", action) => {
    switch (action.type) {
        case C.SORT_COLORS:
            return action.sortBy;
        default :
            return state
    }
}
