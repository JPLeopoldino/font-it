import React from "react";
import { x } from 'react-icons-kit/feather/x'

import { useEditor } from '../../hooks/editor';
import * as SC from './styles';

const ControlsModal = ({
    title
}) => {

    const { handleOpenModal } = useEditor();

    const controls = [
        {
            command: 'CTRL + M',
            description: 'Header Text',
        },
        {
            command: 'CTRL + B',
            description: 'Bold Text',
        },
        {
            command: 'CTRL + I',
            description: 'Italic Text',
        },
        {
            command: 'CTRL + `',
            description: 'Code Block',
        },
        {
            command: 'CTRL + L',
            description: 'List Block',
        },
        {
            command: 'CTRL + U',
            description: 'Underline Text',
        },
        {
            command: 'CTRL + /',
            description: 'Quote Block',
        },
        {
            command: 'CTRL + P',
            description: 'Link Text',
        },
    ]

    return(
        <SC.BackgroundContainer>
            <SC.ModalContainer>
                <SC.CloseButton
                    onClick={handleOpenModal}
                >
                    <SC.CloseIcon icon={x}/>
                </SC.CloseButton>
                <SC.Title>{title}</SC.Title>
                <SC.CommandsContainer>
                    {
                        controls.map((item, index) => {
                            return(
                                <SC.CommandRow id={index}>
                                    <SC.Command>{item.command}</SC.Command>
                                    <SC.CommandDesc>{item.description}</SC.CommandDesc>
                                </SC.CommandRow>
                            )
                        })
                    }
                </SC.CommandsContainer>
            </SC.ModalContainer>
        </SC.BackgroundContainer>
    );
}

export default ControlsModal;
