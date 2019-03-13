import {actionTypes} from './index'
import axios from 'axios';
const getListData=(data)=>({
	type:actionTypes.GET_LIST,
	data:data,
	page:1,
	totalPage:Math.ceil(data.length/5)
})
export const searchFocus=()=>({
	type:actionTypes.SEARCH_FOUCE
})
export const searchBlur=()=>({
	type:actionTypes.SEARCH_BLUR
})
export const mouseLeave=()=>({
	type:actionTypes.MOUSE_LEAVE
})
export const mouseEnter=()=>({
	type:actionTypes.MOUSE_ENTER
})
export const changePage=(page)=>({
	type:actionTypes.CHANGE_PAGE,
	page
});
export const getList=()=>{
	return (dispatch) => {
		axios.get('/api/test').then((res)=>{
			const data=res.data;
			dispatch(getListData(data))
		}).catch(()=>{
			console.log('error')
		})
	}
}
