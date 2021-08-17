import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas/index';
export default function configureStore(preloadedState) {
    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    // then run the saga
    sagaMiddleware.run(mySaga);
    return store;
}
