import {ACTION_1, REQUEST_POSTS, HIDE_LOADER, SHOW_LOADER} from "./types";

export function createPost(post: any): any {
    return {
        type: ACTION_1,
        payload: post
    }
}

export function fetchPosts(): any {
    return {
        type: REQUEST_POSTS
    }

    // return async (dispatch:any) => {
    //     try{
    //         dispatch(showLoader())
    //         const response = await  fetch('https://api.punkapi.com/v2/beers')
    //         const json = await  response.json()
    //         await dispatch({ type: ACTION_2, payload: json})
    //         await setTimeout(dispatch(hideLoader()),10000)
    //     } catch (e:any) {
    //         console.log(e)
    //     }
    // }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}