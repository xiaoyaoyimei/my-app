import React, {
	Component
} from 'react';
import 'antd/dist/antd.css';
import store from './store';

import { getTodoList, getInputChangeAction, getAddListItemAction, getDeleteListItemAction } from './store/actionCreators'
import AppUI from './AppUI';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		store.subscribe(this.handleStoreChange);
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		return <AppUI 
		 	 	 inputValue={this.state.inputValue}
		 	 	 handleInputChange={this.handleInputChange}
		 	 	 handleClick={this.handleClick} 
		 	 	 list={this.state.list}
		 	 	handleDelete={this.handleDelete}
				/>;
	}
	handleInputChange(e) {
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action)
	}
	handleClick() {
		const action = getAddListItemAction();
		store.dispatch(action)
	}
	handleStoreChange() {
		this.setState(store.getState())
	}
	handleDelete(index) {
		const action = getDeleteListItemAction(index);
		store.dispatch(action)
	}
	componentDidMount() {
		const action = getTodoList();
		store.dispatch(action)
	}
}
export default App;