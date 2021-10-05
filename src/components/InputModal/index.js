import React from "react";
import { x } from 'react-icons-kit/feather/x'

import { useEditor } from '../../hooks/editor';
import * as SC from './styles';

const InputModal = ({
    title,
    inputPlaceholder,
    buttonPlaceholder,
    onPress
}) => {

    const { handleOpenModal, setLinkValue, select } = useEditor();

    return(
        <SC.BackgroundContainer
            // onClick={handleOpenModal}
        >
            <SC.ModalContainer>
                <SC.CloseButton
                    onClick={handleOpenModal}
                >
                    <SC.CloseIcon icon={x}/>
                </SC.CloseButton>
                <SC.Title>{title}</SC.Title>
                <SC.Input
                    type="text"
                    id="special"
                    onFocus={select}
                    placeholder={inputPlaceholder}
                    onChange={(event) => setLinkValue(event.target.value)}
                />
                <SC.Button
                    id="button"
                    onClick={onPress}
                >
                    {buttonPlaceholder}
                </SC.Button>
            </SC.ModalContainer>
        </SC.BackgroundContainer>
    );
}

export default InputModal;
