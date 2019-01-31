import React from 'react';
import {Input, Button,List} from 'antd';
const AppUI=(props)=> {
		return (<div style={{marginTop:'10px',marginLeft:'10px'}}>{/*注释*/}
 				<Input  
 				value={props.inputValue}
 				style={{width:'300px'}}
 				onChange={props.handleInputChange}/>
 				<Button type="primary" onClick={props.handleClick}>提交</Button>
 				  <List style={{width:'300px'}}
      				bordered
      				dataSource={props.list}
      				renderItem={(item,index) =>
 				  	(<List.Item  key={item.id} onClick={()=>{props.handleDelete(index)}} >{item.name}</List.Item>)}
    				/>
          </div>)
}

export  default AppUI