import React, {
	Component
} from 'react';
import { connect } from 'react-redux';
import {
	DetailWrapper,
	Title,
	Content
} from './style';
import {actionCreators}from './store'
class Detail extends Component {
	render() {
		const {content}=this.props;
		let wen='',title='';
		if(content.length>0){
			title=content[0].title;
			 wen=content[0].content;
		}
		 
		return(
			<DetailWrapper><Title>{title}</Title>
			<Content>{wen}</Content></DetailWrapper>
		)
	}
		componentDidMount(){
			this.props.getDetail(this.props.match.params.id);
	}
}
const mapState = (state) => ({
	content:state.getIn(['detail', 'articleDetail']),
});
const mapDispatch=(dispatch)=>({
	getDetail(id){
		dispatch(actionCreators.getDetail(id))
	}
})
export default connect(mapState,mapDispatch)(Detail);