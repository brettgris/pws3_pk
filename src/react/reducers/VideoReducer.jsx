import {FETCH_DATA, SET_SECTION, CHANGE_VIDEO} from '../actions/actions.jsx';

export default function(state = null,action){
	switch(action.type){
		case FETCH_DATA:
			return {
				video: action.payload.sections[0].video,
				hidemenu: (action.payload.sections[0].hidemenu) ? action.payload.sections[0].hidemenu : false,
				background: action.payload.sections[0].background
			};
		case SET_SECTION:
			return {
				video: action.payload.video,
				hidemenu: (action.payload.hidemenu) ? action.payload.hidemenu : false,
				background: action.payload.background
			};
		case CHANGE_VIDEO:
			return action.payload;
		default:
			return state;
	}
}
