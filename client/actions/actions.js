import * as types from '../constants/actionTypes';

export const getZipCode = (zipCode) => ({
  type: types.GET_ZIP_CODE,
  payload: zipCode,
});
export const getLocalTips = () => ({
  type: types.GET_LOCAL_TIPS,
  payload: null,
});
export const upvote = (id) => ({
  type: types.UPVOTE,
  payload: id,
});
export const downvote = (id) => ({
  type: types.DOWNVOTE,
  payload: id,
});
// FOR DEVELOPMENT ONLY
export const getDummyTips = () => ({
  type: types.GET_DUMMY_TIPS,
  payload: null,
});
