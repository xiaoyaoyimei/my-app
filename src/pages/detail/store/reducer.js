import {fromJS} from 'immutable';
import * as  constants from './constants';
const defaultState=fromJS({
	articleDetail:{},
})
export default(state=defaultState,action)=>{
	switch(action.type){
	    case constants.DEATIL:
	    return  state.set('articleDetail',action.result)
		default:return state;
	}
	
}