import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
