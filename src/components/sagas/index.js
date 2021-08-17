import imagessaga from './imagessaga';
import watchStatsLoad from './statssaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([imagessaga(), watchStatsLoad()]);
    // code after all-effect
}
