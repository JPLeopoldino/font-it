import React from 'react'
import * as SC from './styles';

const CodeMark = (props) => (
	<SC.CodeMark {...props.attributes}>
		{props.children}
	</SC.CodeMark>
);

export default CodeMark;
