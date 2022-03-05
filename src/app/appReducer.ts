import {HIDE_LOADER,SHOW_LOADER} from "./types";

const initialState = {
    loading: false
}

export const appReducer = (state: {loading: boolean} = initialState,action: { type: string }) => {
    switch (action.type) {
        case SHOW_LOADER:
            return{...state, loading: true}
        case HIDE_LOADER:
            return{...state, loading: false}
        default: return state
    }
}