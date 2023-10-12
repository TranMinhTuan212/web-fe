import { SET_LOADING, SET_LOGIN, SET_POPUP } from "./constant"

export const initState = {
    isLoading: false,
    popup: null,
    user: null
}

export const reducer = (state, action) => {
    switch(action.type){
        case SET_LOADING: 
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_POPUP:
            return {
                ...state,
                popup: action.payload
            }
        case SET_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        default :
        return new Error('action is not valid !')
    }
}