import C from "./actionTypes";



export const rateColor = (id, rating) =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    });
// export const rateColor = {
//     type: C.RATE_COLOR,
//     id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036",
//     rating: 8
// };
