import * as types from '../constants/actionTypes';

const initialState = {
  zipCode: '',
};

const overallReducer = (state=initialState, action) => {

  let zipCode;

  switch(action.type) {
//////////
    case types.GET_ZIP_CODE:
      if(action.payload) {
        zipCode = action.payload;
        
        return {
          ...state,
          zipCode,
        };
      }
      else return state;
//////////
    case types.GET_LOCAL_TIPS:
      if(state.zipCode) {
        
        //ADD DATABASE FETCHING LOGIC HERE
        
        return {
          ...state,
          zipCode,
        };
      }
      else return state;
//////////
      default:
        return state;
  }
};

export default overallReducer;