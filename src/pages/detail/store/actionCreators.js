import * as  constants from './constants';
import axios from 'axios';
export const detail=(result)=>({
	 type:constants.DEATIL,
	 result
})
export const getDetail=(id)=>{
		return (dispatch)=>{
			axios.get(`/api/article/detail?id=${id}`).then((res)=>{
				dispatch(detail(res.data.datas))
			})
	   }
}
