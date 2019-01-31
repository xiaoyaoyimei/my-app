import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM ,INIT_LIST} from './actionTypes'
import axios from 'axios'
export const getInputChangeAction = (value) =>({
		type: CHANGE_INPUT_VALUE,
		value: value
});

export const getAddListItemAction = () =>({
		type: ADD_LIST_ITEM
});

export const getDeleteListItemAction = (index) =>({
		type: DELETE_LIST_ITEM,
		index
});
export const initListAction=(data)=>({
	type:INIT_LIST,
	data
})
export const getTodoList=()=>{
	return (dispatch)=>{
		axios.get('/api/test').then((res) =>{
			const data=res.data;
			const action=initListAction(data);
			dispatch(action)
		})
	}
}
