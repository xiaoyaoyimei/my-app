import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_LIST } from './actionTypes'
const defaultState = {
	inputValue: '',
	list: []
}
export default(state = defaultState, action) => {
	if(action.type === CHANGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if(action.type === ADD_LIST_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push({'id':newState.inputValue,'name':newState.inputValue})
		newState.inputValue = ''
		return newState;
	}
	if(action.type === DELETE_LIST_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1)
		return newState;
	}
	if(action.type === INIT_LIST) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.data
		return newState;
	}
	
	return state

}