import React, {
	Component
} from 'react';

import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import{actionCreators} from './store'
class Home extends Component {
	render() {
		return(
			<HomeWrapper>
			<HomeLeft>
			<img  alt="banner大图" src="//upload.jianshu.io/admin_banners/web_images/4612/1e4eeb1b277034cca932f5e60e46d14b0629073b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" className="img"/>
			<List/>
			</HomeLeft>
			<HomeRight>
			<Recommend></Recommend>
			</HomeRight></HomeWrapper>
		)
	}
	componentDidMount(){
		this.props.getHomeInfo();
	}
}
const mapDispatch=(dispatch)=>({
	getHomeInfo(){
		dispatch(actionCreators.getHomeInfo())
	}
})
export default connect(null,mapDispatch)(Home);