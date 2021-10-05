import React from 'react'
import * as SC from './styles';

const LinkMark = (props) => {

	return (
		<SC.LinkMark
			{...props.attributes}
			href={props.element.url}
			rel="noreferrer"
			target="_blank"
		>
			{props.children}
		</SC.LinkMark>
	);
};

export default LinkMark;
