import React from 'react'

// import { useEditor } from '../../hooks/editor';

const LinkMark = (props) => {
	// const { linkValue } = useEditor();

	return (
		<a
			{...props.attributes}
			href={props.element.url}
			rel="noreferrer"
			target="_blank"
		>
			{props.children}
		</a>
	);
};

export default LinkMark;
