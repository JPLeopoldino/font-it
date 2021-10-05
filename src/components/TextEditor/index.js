import React, { useCallback } from 'react';

import { useEditor } from '../../hooks/editor';
import * as SC from './styles';

import DefaultMark from '../Marks/DefaultMark';
import ListMark from '../Marks/ListMark';
import HeaderMark from '../Marks/HeaderMark';
import CodeMark from '../Marks/CodeMark';
import QuoteMark from '../Marks/QuoteMark';
import LinkMark from '../Marks/LinkMark';

const TextEditor = () => {

    const { editor, customEditor } = useEditor();

    // const CodeElement = props => {
    //     return (
    //         <SC.CodeContainer {...props.attributes}>
    //             <code>{props.children}</code>
    //         </SC.CodeContainer>
    //     )
    // }

    const DefaultElement = props => {
        return <p {...props.attributes}>{props.children}</p>
    }

    // const checkLeaf = useCallback(props => {
    //     switch (props.leaf) {
    //         case 'italic':
    //             return <ItalicMark {...props} />
    //         case 'bold':
    //             return <BoldMark {...props} />
    //         default:
    //             return <span>{props.children}</span>
    //     }
    // })

    // const { isInline } = editor

    // editor.isInline = element => {
    //   return element.type === 'link' ? true : isInline(element)
    // }

    const Leaf = props => {

            // const result = () => {
            //     if (props.leaf.italic){
            //         return <ItalicMark {...props}/>
            // } else if(props.leaf.bold){
            //     return <BoldMark {...props}/>
            // } else if(props.leaf.underline){
            //     return <UnderlineMark {...props}/>
            // } else {
            //     return props.children
            // }
            // }

        return (
            <span
                {...props.attributes}
                style={{
                    fontWeight: props.leaf.bold ? 'bold' : 'normal',
                    textDecoration: props.leaf.underline ? 'underline' : 'none',
                    fontStyle: props.leaf.italic ? 'italic' : 'normal',
                }}
            >
                {
                    props.leaf.header
                    ? <HeaderMark {...props}/>
                    : props.children
                    // result()

                    // props.leaf.italic
                    // ? <ItalicMark {...props}/>
                    // // ? <em>
                    // //     {props.children}
                    // // </em>
                    // : props.children
                }
            </span>
        )
    }

    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeMark {...props} />
            case 'list':
                return <ListMark {...props} />
            case 'quote':
                return <QuoteMark {...props} />
            case 'link':
                return <LinkMark {...props} />
            default:
                return <DefaultMark {...props} />
        }
    }, [])

    const renderLeaf = useCallback(props => {
        // switch (props.element.type) {
        //     case 'bold':
        //         return <BoldMark {...props} />
        //     case 'italic':
        //         return <ItalicMark {...props} />
        //     default:
        //         return props.children
        // }
        return <Leaf {...props} />
    }, [])

    // const renderMark = (props) => {
	// 	switch (props.leaf) {
	// 		case 'bold':
	// 			return <BoldMark {...props} />;

	// 		case 'italic':
	// 			return <ItalicMark {...props} />;

	// 		case 'code':
	// 			return <code {...props.attributes}>{props.children}</code>;

	// 		case 'list':
	// 			return (
	// 				<ul {...props.attributes}>
	// 					<li>{props.children}</li>
	// 				</ul>
	// 			);

	// 		case 'underline':
	// 			return <u {...props.attributes}>{props.children}</u>;

	// 		default: {
	// 			return;
	// 		}
	// 	}
	// };

	// onMarkClick = (e, type) => {
	// 	/* disabling browser default behavior like page refresh, etc */
	// 	e.preventDefault();

	// 	/* grabbing the this.state.value */
	// 	const { value } = this.state;

	// 	/*
	// 		applying the formatting on the selected text
	// 		which the desired formatting
	// 	*/
	// 	const change = value.change().toggleMark(type);

	// 	/* calling the  onChange method we declared */
	// 	this.onChange(change);
	// };


    return(
        <>
            <SC.TextArea
                // renderMark={renderMark}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={event => {
                    if (!event.ctrlKey) {
                        return
                    }
                    // eslint-disable-next-line default-case
                    switch (event.key) {
                        case '`': {
                            event.preventDefault()
                            customEditor.toggleCodeBlock(editor)
                            break;
                        }
                        case 'l': {
                            event.preventDefault()
                            customEditor.toggleListBlock(editor)
                            break;
                        }
                        case 'b': {
                            event.preventDefault()
                            customEditor.toggleBoldMark(editor)
                            break;
                        }
                        case 'i': {
                            event.preventDefault()
                            customEditor.toggleItalicMark(editor)
                            break;
                        }
                        case 'u': {
                            event.preventDefault()
                            customEditor.toggleUnderlineMark(editor)
                            break;
                        }
                        case 'm': {
                            event.preventDefault()
                            customEditor.toggleHeaderMark(editor)
                            break;
                        }
                        case '/': {
                            event.preventDefault()
                            customEditor.toggleQuoteBlock(editor)
                            break;
                        }
                        case 'p': {
                            event.preventDefault()
                            customEditor.toggleLinkMark(editor)
                            break;
                        }
                    }
                }}
            />
        </>
    );
}

export default TextEditor;