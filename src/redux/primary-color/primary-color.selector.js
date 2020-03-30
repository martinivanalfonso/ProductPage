import { createSelector} from 'reselect'

const selectPrimary = state => state.primaryColor

export const selectPrimaryColor = createSelector(
    [selectPrimary],
    primaryColor => primaryColor.primaryColor[0]
)

export const selectSlideToShow = createSelector(
    [selectPrimary],
    primaryColor => primaryColor.slideIdToShowArray[0]
)
