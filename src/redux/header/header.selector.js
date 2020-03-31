import { createSelector} from 'reselect'

const selectHeader = state => state.header

export const selectPrimaryColor = createSelector(
    [selectHeader],
    header => header.primaryColor[0]
)

export const selectSlideToShow = createSelector(
    [selectHeader],
    header => header.slideIdToShowArray[0]
)

export const selectTitleToShow = createSelector(
    [selectHeader],
    header => header.titleToShow[0]
)
export const selectDarkModeBackground = createSelector(
    [selectHeader],
    header => header.darkMode[0]
)
export const selectDarkModeText= createSelector(
    [selectHeader],
    header => header.darkMode[1]
)
