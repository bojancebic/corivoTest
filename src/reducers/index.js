import { combineReducers } from 'redux';
import {SET_USER} from '../actions';

function userReducer(state = {}, action) {
	switch (action.type) {
		case SET_USER:
			return Object.assign({}, state, {
				authToken: action.data
			});
		default: 
			return state;
	}
}

export default combineReducers({
	userReducer
})