import React from 'react';
import {connect} from 'react-redux';

export  function LegalDefinition(props) {


	return(
		<div>
			<p>
				<dfn id='Person'> {props.word + ':'} </dfn>

				{props.content}
			</p>
		</div>

	);

}

