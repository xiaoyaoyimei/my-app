import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes'
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