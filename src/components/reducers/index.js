import { imageReducer } from './imagesReducer';
import { combineReducers } from 'redux';
import { statsReducer } from './statsReducer';
const rootreducer = combineReducers({
    images: imageReducer,
    stats: statsReducer,
});

export default rootreducer;
