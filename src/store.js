import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];
//Create store using reducer and apply middleware to make the request syncronize as per requirement
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        ((window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || (compose))
    )
);
export default store;