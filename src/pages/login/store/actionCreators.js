import axios from 'axios';
import * as constants from './constants';
export const loginData = (result) => ({
	type: constants.LOGIN,
	result
});
export const login = (a, p) => {
			return(dispatch) => {
				axios.post('/api/login', {
					userName: a,
					password: p
				}).then((res) => {
					if(res.data.code==='200'){
						dispatch(loginData(true))
					}
					
				})
			}
		}