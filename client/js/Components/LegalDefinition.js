import React from 'react';
import {connect} from 'react-redux';

export  function LegalDefinition(props) {
return(
		<div className="definition">
			<p>
				<dfn id='Person'> {props.word + ":"} </dfn>
				{props.legalDefinition + "."} <br/>
				<dfn id='Synonyms'> Synonyms: {props.synonyms} </dfn>
			</p>
		</div>
	);

}

