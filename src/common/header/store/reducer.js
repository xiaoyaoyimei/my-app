import {actionTypes} from './index'
import {fromJS} from 'immutable'
const defaultState=fromJS({
	focused:false,
	list:[],
	page:1,
	mouseIn:false,
	totalPage:1
})
export default(state=defaultState,action)=>{
	switch (action.type){
		case actionTypes.SEARCH_FOUCE:return state.set('focused',true);
		case actionTypes.SEARCH_BLUR:return state.set('focused',false);
		case actionTypes.MOUSE_LEAVE:return state.set('mouseIn',false);
		case actionTypes.MOUSE_ENTER:return state.set('mouseIn',true);
		case actionTypes.GET_LIST:
		return  state.merge({
			list:action.data,
			totalPage:action.totalPage
		});
		case actionTypes.CHANGE_PAGE:return state.set('page',action.page); 
		default:return state;
	}
}
