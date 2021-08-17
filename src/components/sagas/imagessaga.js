import { takeEvery, take, call, put, select } from 'redux-saga/effects';
import { IMAGES } from '../../constants';
import { fetchImages } from '../apicalls';
import { loadimages, setimages, errorimages } from '../actions/index';

function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleimagesload);
}

function* handleimagesload() {
    try {
        const page = yield select(state => state.images.page);
        const images = yield call(fetchImages, page);
        yield put(setimages(images));
    } catch (err) {
        yield put(errorimages(err));
    }
}
export default watchImagesLoad;
