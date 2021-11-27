export const GET_RATINGS = "GET_RATINGS";


export function getRatings (payload) {
    return {
        type: GET_RATINGS,
        payload
    }
}