import headerTypes from './header.types'

export const updateColor = () => ({
    type: headerTypes.UPDATE_PRIMARYCOLOR,
})

export const updateSlide = () => ({
    type: headerTypes.UPDATE_SLIDE,
})

export const updateTitle = () => ({
    type: headerTypes.UPDATE_TITLE,
})

export const updateHeader = () => ({
    type: headerTypes.UPDATE_HEADER,

})

export const updateHeaderForward = () => ({
    type: headerTypes.UPDATE_HEADER_FORWARD,

})
export const switchMode = () => ({
    type: headerTypes.SWITCH_MODE,

})