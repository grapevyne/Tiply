import * as types from '../constants/actionTypes';

const initialState = {
  zipCode: '',
  currentTips: [],
  tag: '',
  tempTips: [],
  toggleAddTipsButton: false,
  inputHeader: '',
  inputBlurb: '',
  inputLocation: '',
};

const tipsReducer = (state=initialState, action) => {

  let zipCode;
  let currentTips;

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
        //HERE, ALL TIPS COINCIDING WITH USER-CHOSEN ZIP CODE
        //SHOULD FILL AN ARRAY TO BE DISPLAYED IN TipsContainer.jsx

        return {
          ...state,
          currentTips,
        };
      }
      else return state;
//////////
case types.UPVOTE:

    console.log('UPVOTED :)')

    //ADD DATABASE UPVOTE PUT-LOGIC HERE
    //POTENTIALLY UPDATE STATE TO AVOID A SECOND /GET REQUEST??

    return {
      ...state,
      // currentTips,
    };

//////////
case types.DOWNVOTE:

    console.log('DOWNVOTED :(')

    //ADD DATABASE DOWNVOTE PUT-LOGIC HERE
    //POTENTIALLY UPDATE STATE TO AVOID A SECOND /GET REQUEST??

    return {
      ...state,
      // currentTips,
    };

//////////
    case types.TOGGLE_ADD_TIPS_BUTTON:
      return { 
        ...state,
        toggleAddTipsButton: !state.toggleAddTipsButton,
      };
      

////////// FOR DEVELOPMENT ONLY
case types.GET_DUMMY_TIPS:
  if(!state.zipCode) {
    currentTips = [
      {
        id: 1,
        header: 'Test Tip',
        blurb: 'This is a test tip',
        timestamp: 'Dec 2019',
        zip: '90039',
        votes: 10,
        tags:['Food', 'Nature']
      },
      {
        id: 2,
        header: 'BAD BOY',
        blurb: 'There\'s a BAD BOY in VENICE!!! WATCH OUT!',
        timestamp: 'Dec 2019',
        zip: '90039',
        votes: 2,
        tags:['Sketchy', 'Free']
      },
    ]
    return {
      ...state,
      currentTips,
    };
  }
  else return state;
//////////

case types.INPUT_HEADER:
  return {
    ...state,
    inputHeader: action.payload,
  }
//////////

case types.INPUT_BLURB:
  return { 
    ...state,
    inputBlurb: action.payload,
  }

//////////

case types.INPUT_LOCATION:
  return { 
    ...state,
    inputLocation: action.payload,
  }
      default:
        return state;
  }
};

export default tipsReducer;