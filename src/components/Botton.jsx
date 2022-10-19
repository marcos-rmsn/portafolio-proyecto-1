import React from "react";

import '../stylesheets/botton.css';


const isOperator = (val) =>{
	return isNaN(val)&&(val !== '.')&&(val !== '=');

}

function Botton(props){
  return(
		<div 
		className= {`botton-container ${isOperator(props.children) ? 'operator': '' }`.trimEnd()}
		onClick = {() => props.handleClick(props.children)}
		>
			{props.children}
		</div>
	);
}

export default Botton;
