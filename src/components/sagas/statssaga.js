import { takeEvery, take, call, put, select, fork } from 'redux-saga/effects';
import { IMAGES, STATS } from '../../constants';
import { fetchImageStatsapi } from '../apicalls/stats';
import {
    loadimages,
    setimages,
    errorimages,
    loadImageStats,
    setImageStats,
    setImageStatsError,
} from '../actions/index';

function* handleImageStats(id) {
    try {
        yield put(loadImageStats(id));
        const res = yield call(fetchImageStatsapi, id);
        yield put(setImageStats(id, res.downloads.total));
    } catch (err) {
        yield put(setImageStatsError(id));
    }
}
function* watchStatsLoad() {
    while (true) {
        const images = yield take(IMAGES.LOAD_SUCCESS);
        console.log(images.payload);
        for (let i = 0; i < images.payload.length; i++) {
            //
            yield fork(handleImageStats, images.payload[i].id);
        }
    }
}

export default watchStatsLoad;
