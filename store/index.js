import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';
import issueReducer from './reducers/issuesReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	issues: issueReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
