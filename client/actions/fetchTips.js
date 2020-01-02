import * as types from '../constants/actionTypes';

export function fetchTips(zip) {
    return (dispatch) => {
        dispatch({ type: types.START_FETCHING_TIPS });
        fetch(`/tips/findTips/${zip}`)
            .then(res => res.json())
            .then(data => dispatch({ type: types.FETCHING_TIPS, data }))
            .catch(err => console.log("yo this an error: ", err))
    };
}
