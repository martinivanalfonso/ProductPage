import primaryColorTypes from "./primary-color.types";

const INITIAL_STATE = {
  primaryColor: ["salmon", "purple", "violet"],
  slideIdToShowArray: ["slide1", "slide2", "slide3"]
};

const primaryColorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case primaryColorTypes.UPDATE_PRIMARYCOLOR:
      return {
        ...state,
        primaryColor: [
          state.primaryColor[1],
          state.primaryColor[2],
          state.primaryColor[0]
        ]
      };
    case primaryColorTypes.UPDATE_SLIDE:
      console.log('slide f')
      return {
        ...state,
        slideIdToShowArray: [
          state.slideIdToShowArray[1],
          state.slideIdToShowArray[2],
          state.slideIdToShowArray[0]
        ]
      };
    default:
      return state;
  }
};

export default primaryColorReducer;
