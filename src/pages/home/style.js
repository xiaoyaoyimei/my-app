import styled from 'styled-components';
export const HomeWrapper = styled.div `
	width:960px;
	margin:20px auto 0;
	height:100%;

	.img{
		width:625px;
		height:270px;
		display:block;
		margin-bottom:20px
	}
`
export const HomeLeft = styled.div `
	padding-left:15px;
	box-sizing:border-box;
	width:66.66%;
	float:left;
`
export const HomeRight = styled.div `
	width:29.16667%
	float:right;
	.recommend{
		width:100%;
	}
`
export const ListItem = styled.div `
padding:20px 0;
border-top:1px solid #ddd;
position:relative;
.r{
	    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 150px;
    height: 100px;
        border-radius: 4px;
    border: 1px solid #f0f0f0;
}
`
export const ListLeft = styled.div `
width:458px`
export const ListTitle = styled.div `
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;`

export const ListContent = styled.p `
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;`

export const LoadMore = styled.div `
	cursor:pointer;
       width: 100%;
    height: 40px;
    line-height:40px;
    margin: 30px auto 60px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    display: block;`