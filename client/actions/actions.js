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

// TAGS REDUCER
export const getTags = () => ({
  type: types.GET_TAGS,
  payload: null,
});

export const selectTag = (tag) => ({
  type: types.SELECT_TAG,
  payload: tag,
});

export const filterTipsByTag = () => ({
  type: types.FILTER_TIPS_BY_TAG,
  payload: null,
});

// FOR DEVELOPMENT ONLY
export const getDummyTips = () => ({
  type: types.GET_DUMMY_TIPS,
  payload: null,
});
