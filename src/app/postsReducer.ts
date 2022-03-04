import {ACTION_1, ACTION_2} from "./types";

const initialState = {
    posts: [],
}

export default function postsReducer(
    state = initialState,
    action:
        {
            type: string,
            payload: any
        }
): any {
    switch (action.type) {
        case ACTION_1:
            return {...state, post: action.payload};
        case ACTION_2:
            return {...state, posts: action.payload};
        default:
            return state;
    }
}