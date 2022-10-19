import React from "react";
import '../stylesheets/ClearBotton.css';

const ClearBotton = (props) => (
	
		<div 
			className='clear-botton'
			onClick={props.handleClear}>
			{props.children}
		</div>
)

export default ClearBotton;