import React from 'react';

export default function Button (props) {

return(
	<div className="trans">
	<button onClick={props.onClick}>Translate </button>
	</div>
);
};