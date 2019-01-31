import React, {
	Component
} from 'react';
import 'antd/dist/antd.css';
import {Input, Button,List  } from 'antd';
import store from './store';
import { getInputChangeAction,getAddListItemAction,getDeleteListItemAction} from './store/actionCreators'
class App extends Component {
	constructor(props) {
		super(props);
		this.state=store.getState();
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleStoreChange=this.handleStoreChange.bind(this);
		store.subscribe(this.handleStoreChange);
		this.handleClick=this.handleClick.bind(this);
	}
	render() {
		return(
			<div style={{marginTop:'10px',marginLeft:'10px'}}>{/*注释*/}
 				<Input  
 				value={this.state.inputValue}
 				style={{width:'300px'}}
 				onChange={this.handleInputChange}/>
 				<Button type="primary" onClick={this.handleClick}>提交</Button>
 				  <List style={{width:'300px'}}
      				bordered
      				dataSource={this.state.list}
      				renderItem={(item,index) => (<List.Item onClick={this.handleDelete.bind(this,index)} >{item}</List.Item>)}
    				/>
          </div>
		);
	}
	handleInputChange(e){
		const action=getInputChangeAction(e.target.value);
		store.dispatch(action)
	}
	handleClick(){
			const action=getAddListItemAction();
			store.dispatch(action)
	}
	handleStoreChange(){
		this.setState(store.getState())
	}
	handleDelete(index){
		const action=getDeleteListItemAction(index);
		store.dispatch(action)
	}
}
export default App;