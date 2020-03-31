import headerTypes from "./header.types";

const INITIAL_STATE = {
  primaryColor: ["#f38181", "#fce38a", "#95e1d3"],
  secondaryColor: ["#40434E","#702632","#381460"],
  darkMode: ['#eaffd0','#222831'],
  slideIdToShowArray: ["slide1", "slide2", "slide3"],
  titleToShow: ["Title of the project", "Second title of the project", "Third and last title of the project"]
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case headerTypes.SWITCH_MODE:
      return {
        ...state,
        darkMode: [state.darkMode[1],state.darkMode[0]],
        primaryColor: [state.secondaryColor[0], state.secondaryColor[1], state.secondaryColor[2],],
        secondaryColor: [state.primaryColor[0], state.primaryColor[1], state.primaryColor[2],],
      }
    case headerTypes.UPDATE_PRIMARYCOLOR:
      return {
        ...state,
        primaryColor: [
          state.primaryColor[1],
          state.primaryColor[2],
          state.primaryColor[0]
        ]
      };
    case headerTypes.UPDATE_SLIDE:
      return {
        ...state,
        slideIdToShowArray: [
          state.slideIdToShowArray[1],
          state.slideIdToShowArray[2],
          state.slideIdToShowArray[0]
        ]
      };
    case headerTypes.UPDATE_TITLE:
      return {
        ...state,
        titleToShow: [
          state.titleToShow[1],
          state.titleToShow[2],
          state.titleToShow[0]
        ]
      };
    case headerTypes.UPDATE_HEADER:
      return {
        ...state,
        primaryColor: [
          state.primaryColor[1],
          state.primaryColor[2],
          state.primaryColor[0]
        ],
        slideIdToShowArray: [
          state.slideIdToShowArray[1],
          state.slideIdToShowArray[2],
          state.slideIdToShowArray[0]
        ],
        titleToShow: [
          state.titleToShow[1],
          state.titleToShow[2],
          state.titleToShow[0]
        ]
      };
    case headerTypes.UPDATE_HEADER_FORWARD:
      return {
        ...state,
        primaryColor: [
          state.primaryColor[2],
          state.primaryColor[0],
          state.primaryColor[1]
        ],
        slideIdToShowArray: [
          state.slideIdToShowArray[2],
          state.slideIdToShowArray[0],
          state.slideIdToShowArray[1]
        ],
        titleToShow: [
          state.titleToShow[2],
          state.titleToShow[0],
          state.titleToShow[1]
        ]
      };
    default:
      return state;
  }
};

export default headerReducer;
