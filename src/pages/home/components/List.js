import React, {
	Component
} from 'react';
import { ListItem, ListLeft, ListTitle, ListContent, LoadMore } from '../style'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
class List extends Component {
	render() {
		const {
			list,
			getMoreList,
			page,
			totalpage
		} = this.props;
		return(
			<div>
					{/*return (
							<Link to={'/detail/' + item.get('id')}>
								<ListItem >
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);*/}
			
							{
							 		list.map((item, index) => {
											return(
												<Link  key={index}  to={'/detail/' + item.get('id')}>
												<ListItem>
													 <ListLeft>
													
										 		<ListTitle>{item.get('title')}</ListTitle><ListContent> {item.get('desc')}</ListContent>
							                        </ListLeft>
									 				<img alt="小图片" className="r" src={item.get('imgurl')}/>
												</ListItem>
											</Link>
									);
								})
						  
							}
					{ totalpage<page*2? <LoadMore onClick={()=>{getMoreList(page)}}>阅读更多</LoadMore>: <LoadMore onClick={()=>{getMoreList(page)}}>阅读更多</LoadMore>}	
						</div>
		)

	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage']),
	totalpage: state.getIn(['home', 'totalpage'])
});
const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})
export default connect(mapState, mapDispatch)(List);