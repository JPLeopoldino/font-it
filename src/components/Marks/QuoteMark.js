import React from 'react'
import * as SC from './styles';

const QuoteMark = (props) => (
	<SC.QuoteMark {...props.attributes}>
		{props.children}
	</SC.QuoteMark>
);

export default QuoteMark;
