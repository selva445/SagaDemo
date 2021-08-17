import { IMAGES, STATS } from '../../constants/index';

const loadimages = () => ({
    type: IMAGES.LOAD,
});

const setimages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    payload: images,
});

const errorimages = images => ({
    type: IMAGES.LOAD_FAILURE,
    payload: images,
});

const loadImageStats = id => ({
    type: STATS.LOAD,
    id,
});

const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
});

const setImageStatsError = id => ({
    type: STATS.LOAD_FAIL,
    id,
});

export {
    loadimages,
    setimages,
    errorimages,
    loadImageStats,
    setImageStats,
    setImageStatsError,
};
