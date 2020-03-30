import primaryColorTypes from './primary-color.types'

export const updateColorType = color => ({
    type: primaryColorTypes.UPDATE_PRIMARYCOLOR,
    payload: color
})