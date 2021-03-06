import {takeEvery, put,call} from 'redux-saga/effects'
import {PUT_POSTS, REQUEST_POSTS} from "./types";
import {hideLoader, showLoader} from "./action";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker():any {
    try{
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({type: PUT_POSTS, payload})
        yield put(hideLoader())
    }
    catch (e) {
        console.log(e)
    }
}
async function fetchPosts() {
    const response = await  fetch('https://api.punkapi.com/v2/beers')
    return await  response.json()
}