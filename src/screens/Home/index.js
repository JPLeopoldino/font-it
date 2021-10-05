import React from 'react';
import * as SC from './styles';

import TextEditor from '../../components/TextEditor';
import ControlsModal from '../../components/ControlsModal';
import { useEditor } from '../../hooks/editor';

import { type } from 'react-icons-kit/feather/type'
import { bold } from 'react-icons-kit/feather/bold'
import { italic } from 'react-icons-kit/feather/italic'
import { code } from 'react-icons-kit/feather/code'
import { list } from 'react-icons-kit/feather/list'
import { underline } from 'react-icons-kit/feather/underline'
import { info } from 'react-icons-kit/feather/info'
import { quote } from 'react-icons-kit/entypo/quote'
import { intact } from 'react-icons-kit/iconic/intact'
import { broken } from 'react-icons-kit/iconic/broken'

function Home() {

    const { customEditor, editor, openModal, handleOpenModal, handleAddLink, handleRemoveLink, isLinkActive } = useEditor();

    return (
        <SC.MainContainer className="main">
            {
                openModal ?
                <ControlsModal
                    title="Controls"
                    // inputPlaceholder="Insert a URL"
                    // buttonPlaceholder="Click Me"
                    // onPress={event => {
                    //     event.preventDefault()
                    //     handleOpenModal()
                    //     customEditor.toggleLinkMark(editor)
                    // }}
                />
                : null
            }
            <SC.Title className="title">Font It.</SC.Title>
            <SC.BodyContainer className="main-box">
                <SC.ToolsRow className="buttons-row">
                    <SC.Button
                        className="button"
                        onMouseDown={event => {
                            event.preventDefault()
                            customEditor.toggleHeaderMark(editor)
                        }}
                    >
                        <SC.ToolIcon icon={type} />
                    </SC.Button>
                    <SC.Button
                        className="button"
                        onMouseDown={event => {
                            event.preventDefault()
                            customEditor.toggleBoldMark(editor)
                        }}
                    >
                        <SC.ToolIcon icon={bold} />
                    </SC.Button>
                    <SC.Button
                        className="button"
                        onMouseDown={event => {
                            event.preventDefault()
                            customEditor.toggleItalicMark(editor)
                        }}
                    >
                        <SC.ToolIcon icon={italic} />
                    </SC.Button>
                    <SC.Button
                        className="button"
                        onMouseDown={event => {
                            event.preventDefault()
                            customEditor.toggleCodeBlock(editor)
                        }}
                    >
                        <SC.ToolIcon icon={code} />
                    </SC.Button>
                    <SC.Button
                        className="button"
                        onMouseDown={event => {
                            event.preventDefault()
                            customEditor.toggleListBlock(editor)
                        }}
                    >
                        <SC.ToolIcon icon={list} />
                    </SC.Button>
                    <SC.Button
                        className="button"
                        onMouseDown={event => {
                            event.preventDefault()
                            customEditor.toggleUnderlineMark(editor)
                        }}
                    >
                        <SC.ToolIcon icon={underline} />
                    </SC.Button>
                    <SC.Button
                        className="button"
                        onMouseDown={event => {
                            event.preventDefault()
                            customEditor.toggleQuoteBlock(editor)
                        }}
                    >
                        <SC.ToolIcon icon={quote} />
                    </SC.Button>
                    <SC.Button
                        className="button"
                        onMouseDown={handleAddLink}
                    >
                        <SC.ToolIcon icon={intact} />
                    </SC.Button>
                    <SC.Button
                        className="button"
                        onMouseDown={handleRemoveLink}
                    >
                        <SC.ToolIcon
                            icon={broken}
                            inactive={isLinkActive}
                        />
                    </SC.Button>
                    <SC.InfoContainer>
                        <SC.Button
                            className="button"
                            onClick={handleOpenModal}
                        >
                            <SC.ToolIcon icon={info} inactive />
                        </SC.Button>
                    </SC.InfoContainer>
                </SC.ToolsRow>
                <TextEditor id="editable" />
                {/* <SC.TextContainer className="text-area" /> */}
            </SC.BodyContainer>
            <SC.Credits>
                Created by:
                <SC.CreditsLink
                    href={"https://github.com/JPLeopoldino/"}
                    target='_blank'
                >
                    João Pedro Leopoldino
                </SC.CreditsLink>
            </SC.Credits>
        </SC.MainContainer>
    );
}

export default Home;
