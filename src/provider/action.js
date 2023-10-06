import {
    SET_LOADING,
    SET_POPUP
}
from './constant'

export const setLoading = payload => {
    return {
        type: SET_LOADING,
        payload
    }
}

export const setPopup = payload => {
    return {
        type: SET_POPUP,
        payload
    }
}