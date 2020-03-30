import primaryColorTypes from './primary-color.types'

const INITIAL_STATE = {
    primaryColor: ['salmon', 'purple', 'violet']
}

const primaryColorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case primaryColorTypes.UPDATE_PRIMARYCOLOR: 
        return {
            ...state,
            primaryColor: [state.primaryColor[1],state.primaryColor[2],state.primaryColor[0]]
        }
        default:
            return state
    }
}

export default primaryColorReducer;