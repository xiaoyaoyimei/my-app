import React,{Component} from 'react';
import {connect} from 'react-redux'
class Recommend extends Component{
	render(){
		return (
			<div>
						{
						this.props.list.map((item,index)=>{
						return (<img alt='图片' className="recommend" key={index} src={item.get('imgurl')}/>)	
						})
			 }
						</div>
		)
	}
}
const mapState=(state)=>({
	list:state.getIn(['home','recommondList'])
})
export default connect(mapState,null)(Recommend);
