import headerTypes from "./header.types";

const INITIAL_STATE = {
  primaryColor: ["#702632","#40434E","#381460"],
  secondaryColor: ["#f38181", "#fce38a", "#95e1d3"],
  darkMode: ['#222831','#eaffd0'],
  slideIdToShowArray: ["slide1", "slide2", "slide3"],
  titleToShow: ["Hello there!", "Specialized in React", "I'm a front end web developer"]
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
