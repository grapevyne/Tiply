import * as types from '../constants/actionTypes';

const initialState = {
  zipCode: '',
  currentTips: [],
  tempTips: [],
  toggleAddTipsButton: false,
  inputHeader: '',
  inputBlurb: '',
  inputLocation: '',
  toggleTagsDropdown: false,
  tagList: ['Sketchy', 'Free', 'Nature', 'Food', 'Extra - Filter Me!'],
  selectedTags: [],
  tempTags: [],
};

const tipsReducer = (state = initialState, action) => {

  let zipCode;
  let currentTips;
  let tempTips;
  let tagList;
  let selectedTags;
  let tempTags;

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
      if (state.zipCode) {
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


    ////////// FOR DEVELOPMENT ONLY
    case types.GET_DUMMY_TIPS:
      if (!state.zipCode) {
        currentTips = [
          {
            id: 1,
            header: 'Test Tip',
            blurb: 'This is a test tip',
            timestamp: '2020-01-01T03:26:21.977Z',
            zip: '90039',
            votes: 10,
            tags: ['Food', 'Nature']
          },
          {
            id: 2,
            header: 'BAD BOY',
            blurb: 'There\'s a BAD BOY in VENICE!!! WATCH OUT!',
            timestamp: '2020-01-01T03:26:21.977Z',
            zip: '90039',
            votes: 2,
            tags: ['Sketchy', 'Free']
          },
        ]
        tempTips = [...currentTips]
        return {
          ...state,
          tempTips,
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
        tempTips: [...state.currentTips],
        requesting: true,
      }

    /////////
    case types.FETCHING_TIPS:
      console.log("action data: ", action.data)
      return {
        ...state,
        currentTips: action.data.tips,
        tempTips: action.data.tips,
        requesting: false,
      }

    /////////
    case types.SELECT_TAG:
      selectedTags = [...state.selectedTags];
      if (action.payload) {
        if(!selectedTags.includes(action.payload)) {
          selectedTags.push(action.payload)
        }
        else {
          for(let i = 0; i < selectedTags.length; i++) {
            if(selectedTags[i] === action.payload) {
              selectedTags.splice(i, i + 1)
            }
          }
        }
        return {
          ...state,
          selectedTags,
        };
      }
      else return state;
  
    //////////
    case types.FILTER_TIPS_BY_TAG:
      tempTips = [...state.currentTips];
      selectedTags = [...state.selectedTags];
      if (state.selectedTags) {
        tempTips = new Array();
        state.currentTips.forEach(el => {
          for(let i = 0; i < el.tags.length; i++) {
            if(selectedTags.includes(el.tags[i])) {
              if(!tempTips.includes(el))tempTips.push(el);
            }
          }
        })
        if(!selectedTags.length) tempTips = [...state.currentTips]
        return {
          ...state,
          tempTips,
        };
      }
      return state;

    //////////
    default: {
      return state;
    }
  }
}

export default tipsReducer;