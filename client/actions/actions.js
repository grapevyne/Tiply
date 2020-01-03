import * as types from '../constants/actionTypes';

export const getZipCode = (zipCode) => ({
  type: types.GET_ZIP_CODE,
  payload: zipCode,
});

export const getLocalTips = () => ({
  type: types.GET_LOCAL_TIPS,
  payload: null,
});

export const toggleAddTipsButton = () => ({
  type: types.TOGGLE_ADD_TIPS_BUTTON,
  payload: toggleAddTipsButton
})
export const upvote = (id) => ({
  type: types.UPVOTE,
  payload: id,
});
export const downvote = (id) => ({
  type: types.DOWNVOTE,
  payload: id,
});

export const inputHeader = (inputHeader) => ({
  type: types.INPUT_HEADER,
  payload: inputHeader,
})

export const inputBlurb = (inputBlurb) => ({
  type: types.INPUT_BLURB,
  payload: inputBlurb,
})

export const inputLocation = (inputLocation) => ({
  type: types.INPUT_LOCATION,
  payload: inputLocation,
})

export const toggleTagsDropdown = () => ({
  type: types.TOGGLE_TAGS_DROPDOWN,
  payload: toggleTagsDropdown,
})

export function addTip(tipData) {
  return (dispatch) => {
    console.log('Attempting Post To DB with tipData: ', tipData);
    dispatch({ type: types.POST_TIP });
    fetch(`/tips/createTip`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tipData),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Data returned from addTip post request: ');
        console.log(data);
      })
      // .then(data => dispatch({ type: types.ADD_TIP, data }))
      .catch(err => console.log("Error in addTip: ", err))
  };
}

//TAGS
export const selectTag = (tag) => ({
  type: types.SELECT_TAG,
  payload: tag,
});

export const filterTipsByTag = () => ({
  type: types.FILTER_TIPS_BY_TAG,
  payload: null,
});

export const assignTag = (tag) => ({
  type: types.ASSIGN_TAG,
  payload: tag,
});

// FOR DEVELOPMENT ONLY
export const getDummyTips = () => ({
  type: types.GET_DUMMY_TIPS,
  payload: null,
});
