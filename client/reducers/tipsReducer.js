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
  tagList: [],
  toggleTagsDropdown: false,
};

const tipsReducer = (state = initialState, action) => {

  let zipCode;
  let currentTips;

  switch (action.type) {
    //////////
    case types.GET_ZIP_CODE:
      if (action.payload) {
        zipCode = action.payload;

        return {
          ...state,
          zipCode,
        };
      }
      else return state;
    //////////
    case types.GET_LOCAL_TIPS:
      console.log(state.zipCode);
      if(state.zipCode) {
        // Fetch tips from DB with provided zipcode
        // fill currentTips with resulting data
        fetch(`/tips/findTips/${state.zipCode}`)
          .then(response => response.json())
          .then(data => {
            console.log('Response from fetch request to findTips');
            console.log("data from the fetch request ", data.tips);
            currentTips = data.tips;

            return {
              ...state,
              currentTips,
            };
          })
          .catch(err => {
            console.log('Error in fetch to findTips', err);

            return state;
          });
      }
      else return state;

    //////////
    case types.UPVOTE:

      currentTips = [...state.currentTips]
      for (let i = 0; i < currentTips.length; i++) {
        if (currentTips[i].id === action.payload) {
          currentTips[i].votes++;
          console.log('UPVOTED', currentTips[i].header);
          //ADD DATABASE UPVOTE PUT-LOGIC HERE
          //POTENTIALLY UPDATE STATE TO AVOID A SECOND /GET REQUEST??
          fetch(`/tips/updateVotes/${currentTips[i].id}`, {
            method: "POST",
            header: {
              "Content-Type": "application/json"
            },
            body: {
              votes: JSON.stringify({
                votes: currentTips[i].votes
              })
            }
          })
            .then(data => console.log(data.rows[0]))
            .catch(err => console.log(err));
        }
      }
      return {
        ...state,
        currentTips,
      };

    //////////
    case types.DOWNVOTE:

      currentTips = [...state.currentTips]
      for (let i = 0; i < currentTips.length; i++) {
        if (currentTips[i].id === action.payload) {
          currentTips[i].votes--;
          console.log('DOWNVOTED', currentTips[i].header);
          //ADD DATABASE UPVOTE PUT-LOGIC HERE
          //POTENTIALLY UPDATE STATE TO AVOID A SECOND /GET REQUEST??
          fetch(`/tips/updateVotes/${currentTips[i].id}`, {
            method: "POST",
            header: {
              "Content-Type": "application/json"
            },
            body: {
              votes: JSON.stringify({
                votes: currentTips[i].votes
              })
            }
          })
            .then(data => console.log(data.rows[0]))
            .catch(err => console.log(err));
        }
      }
      return {
        ...state,
        currentTips,
      };

//////////
    case types.TOGGLE_ADD_TIPS_BUTTON:
      return { 
        ...state,
        toggleAddTipsButton: !state.toggleAddTipsButton,
      };
      
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

//////////
case types.TOGGLE_TAGS_DROPDOWN:
  return { 
    ...state,
    toggleTagsDropdown: !state.toggleTagsDropdown,
  }

/////////
case types.START_FETCHING_TIPS:
  return {
    ...state,
    currentTips: [...state.currentTips],
    requesting: true,
  }

case types.FETCHING_TIPS:
  console.log("action data: ", action.data)
  return { 
    ...state,
    currentTips: action.data.tips,
    requesting: false,
  }

case types.POST_TIP:
  return {
    ...state,
    requesting: true,
  }

case types.ADD_TIP:
  return {
    ...state,
    requesting: false,
  }

  default: {
      return state;
    }
  }
}

export default tipsReducer;