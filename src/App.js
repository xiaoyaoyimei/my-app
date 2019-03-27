import React, {
	Component,
	Fragment
} from 'react';
import createHistory from 'history/createHashHistory'
import Header from './common/header/index';
import { GlobalStyle } from './style';
import { GlobalFont } from './static/iconfont/iconfont';
import { Provider } from 'react-redux'
import { Router, Route ,Switch,Redirect} from 'react-router-dom';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import store from './store';
import { homepage } from '../package.json';
console.log(homepage)
const history = createHistory({
    basename: homepage
  })
class App extends Component {
	render() {
		return(<Provider store={store}>
			<Fragment><GlobalStyle/><GlobalFont/>
			  <Router history={history}>
      		<div>
            <Header />
                    <Switch>
      		<Route path='/' exact component={Home}></Route>
      			<Route path='/detail/:id' exact component={Detail}></Route>
      			 <Route path='/login' exact component={Login}></Route>
      			       <Redirect to="/" />
      			               </Switch>
      		</div>
      	</Router></Fragment></Provider>);
	}

}
export default App;