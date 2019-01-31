import{CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELETE_LIST_ITEM} from './actionTypes'
const defaultState={
	inputValue:'123',
	list:[1,2]
}
export default(state=defaultState,action)=>{
	console.log(state,action)
	if(action.type===CHANGE_INPUT_VALUE){
		const newState=JSON.parse(JSON.stringify(state));
		newState.inputValue=action.value;
		return newState;
	}
	 if(action.type===ADD_LIST_ITEM){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue)
		newState.inputValue=''
		return newState;
	}
	 if(action.type===DELETE_LIST_ITEM){
	 	 	console.log(action.index)
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1)
		return newState;
	}
	return state
	
}
