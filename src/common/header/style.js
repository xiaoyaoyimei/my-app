import styled from 'styled-components';
import logo from '../../static/logo.png'
export const HeaderWrapper=styled.div`
	height:56px;
	border-bottom:1px solid #f0f0f0;
`
export const Logo=styled.div`
	height:56px;
	width:100px;
	position:absolute;
	left:0;
	right:0;
	background:url(${logo});
	background-size:contain;
`
export const Nav=styled.div`
	width:960px;
	margin:0 auto;
	height:100%;
`
export const NavItem=styled.div`
	    padding: 0px 15px;
    color: #333;
    font-size: 17px;
    line-height: 56px;
	&.left{
		display:inline-block;
	}
	&.right{
		float:right
		color:#969696;
	}
	&.active{
		color:#ea6f5a
	}
	
`
export const NavSearch=styled.input.attrs({
	placeholder:'搜索'
})`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    margin-top:9px;
    transition: width .5s;
    &::placeholder{
    	color:#999;
    }
    &.focused{
		width:240px
	};
		&.slide-enter{
		width:160px
		transition:all .2s ease-out
	}
	&.slide-enter-active{
			width:240px;
	}
		&.slide-exit{
		transition:all .2s ease-out
	}
	&.slide-exit-active{
			width:160px;
	}
`
export const Addtion=styled.div`{
	position:absolute;
	right:0;
	top:0
}`
export const Button=styled.button`{
	    padding: 6px 12px;
    cursor: pointer;
    background: none;
        text-align: center;
    vertical-align: middle;
    border:0 none;
        height: 40px;
    line-height: 24px;
    &.sign-up{
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    width:85px;
    }
    &.write-btn{
    	float: right;
    width: 100px;
    margin: 8px 15px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;}
}`
export const SearchWrapper=styled.div`{

	position:relative;
	float:left;
	margin-left:20px;
	.zoom{
		position:absolute;
		right:10px;
		top:15px;
		width: 30px;
    height: 30px;
    border-radius: 30px;
        line-height: 30px;
		 &.focused{
		background: #8d8d8d;
    
    text-align: center;

	};
	}
}`
export const SearchInfo=styled.div`{
		background:#fff;
position: absolute;
left: 0;
top: 56px;
width: 200px;
padding: 20px 20px 10px;
border: 1px solid #f0f0f0;
border-radius: 3px;
}`

export const SearchSwitch=styled.span`{
	float:right
	.spin{
		display:block;
		float:left;
		font-size:12px;
		margin-right:2px;
		transition:all .2s ease-in;
		transform-origin:center center;
	}
}`

export const SearchItem=styled.a`{
padding: 2px 6px;

font-size: 12px;

color: #787878;

border: 1px solid #ddd;

border-radius: 3px;
display:inline-block;
margin:15px 10px 0 0;
cursor:pointer;
&:hover{
	color:#454545;
	border-color:#787878
}
}`