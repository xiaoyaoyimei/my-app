import {fromJS} from 'immutable';
import * as constants from './constants';
const defaultState=fromJS({
	articleList:[],
	recommondList:[],
	articlePage:0,
	totalpage:0
})
export default(state=defaultState,action)=>{
	switch(action.type){
	    case constants.ACTICLE_LIST:
	    return  state.merge({
		'articleList': fromJS(action.result),
		'articlePage': fromJS(action.nextpage),
		'totalpage':fromJS(action.totalpage)
		});
		default:return state;
	}
	
}
