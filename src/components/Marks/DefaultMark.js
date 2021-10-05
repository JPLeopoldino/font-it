import React from 'react'

const DefaultMark = (props) => (
	<p {...props.attributes}>
		{props.children}
	</p>
);

export default DefaultMark;
