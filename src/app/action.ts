import {ACTION_1, ACTION_2} from "./types";

export function createPost(post: any): any {
    return {
        type: ACTION_1,
        payload: post
    }
}
export function deletePost(post: any) {
    return {
        type: ACTION_2,
        payload: post
    }
}