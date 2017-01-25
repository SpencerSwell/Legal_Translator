import React from 'react';
import {connect} from 'react-redux';

export  function LegalDefinition(props) {


	return(
		<div>
			<p>
				<dfn id='Person'> Person: </dfn>

				{props.content}
			</p>
		</div>

	);

}

function mapStateToProps(state,props) {
	console.log(state);
	return {
		legalDefinition:state.legalDefinition

	};

};

export default connect(mapStateToProps)(LegalDefinition);