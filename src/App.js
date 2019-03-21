import React, {
	Component,
	Fragment
} from 'react';
import Header from './common/header/index';
import { GlobalStyle } from './style';
import { GlobalFont } from './static/iconfont/iconfont';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import store from './store';
class App extends Component {
	render() {
		return(<Provider store={store}>
			<Fragment><GlobalStyle/><GlobalFont/>
			      	<BrowserRouter>
      		<div>
            <Header />
      			<Route path='/' exact component={Home}></Route>
      			<Route path='/detail/:id' exact component={Detail}></Route>
      			  <Route path='/login' exact component={Login}></Route>
      		</div>
      	</BrowserRouter></Fragment></Provider>);
	}

}
export default App;