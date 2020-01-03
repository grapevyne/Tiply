import * as types from '../constants/actionTypes';

export function fetchTips(zip) { 
    return (dispatch) => { 
        dispatch({ type: types.START_FETCHING_TIPS });
        fetch(`/tips/findTips/${zip}`)
            .then(res => res.json())
            .then(data => dispatch({ type: types.FETCHING_TIPS, data}))
            .catch(err => console.log("problem with fetching tips: ", err))
    };
}


export function fetchTags() { 
    return (dispatch) => { 
        dispatch({ type: types.START_FETCHING_TAGS });
        fetch('/tips/tags')
            .then(res => res.json())
            .then(data => dispatch({ type: types.FETCHING_TAGS, data }))
            .catch(err => console.log("problem with fetching tags: ", err));
    }
}