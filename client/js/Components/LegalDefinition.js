	import React from 'react';
	import {connect} from 'react-redux';
	
	export  function LegalDefinition(props){

		return(
			<div>
				<p>
					<dfn id='Person'> Person: </dfn>
						{props.legalDefinition}
				</p>
			</div>

			);

		}

		function mapStateToProps (state,props) 
{
    return {
    legalDefinition:state.legalDefinition

    };

};

export default connect(mapStateToProps)(LegalDefinition);