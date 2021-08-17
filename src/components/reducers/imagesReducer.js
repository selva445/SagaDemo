import { IMAGES } from '../../constants/index';

const initialstate = {
    imagespage: [],
    success: 'false',
    error: 'false',
    loading: 'false',
    page: 1,
};

export const imageReducer = (state = initialstate, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return { ...state, loading: 'true' };
        case IMAGES.LOAD_SUCCESS:
            return {
                ...state,
                imagespage: action.payload,
                success: 'true',
                page: state.page + 1,
            };

        case IMAGES.LOAD_FAILURE:
            return { ...state, imagespage: action.payload, error: 'true' };

        default:
            return state;
    }
};
