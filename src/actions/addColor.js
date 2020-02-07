import C from "./actionTypes";
import { v4 } from 'uuid'

export const addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()
    });
// export const addColor =  {
//     type: C.ADD_COLOR,
//     color: "RED",
//     title: "Night RED",
//     rating: 0,
//     id: "b5685c39-3bdc-4727-9188-6c9a33df7f66",
//     timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
//   };
