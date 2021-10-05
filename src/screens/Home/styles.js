import styled from 'styled-components'
import Icon from 'react-icons-kit';

export const MainContainer = styled.div`
    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 50px;
    position: relative;
`;

export const Title = styled.h1`
    font-size: 42px;
    letter-spacing: 1px;
    color: #3d3d3d;
    font-weight: normal;
    user-select: none;
`;

export const BodyContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.05);
`;

export const ToolsRow = styled.div`
    border-bottom: 1.5px solid #EEEEEE;
    width: 100%;
    position: relative;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: bold;
    padding: 10px;
    border-radius: 4px;
    transition: 0.2s ease;
    margin: 0px 3px 5px;
    user-select: none;
    cursor: pointer;

    &:active{
        color: #FFFFFF;
        background-color: #3d3d3d !important;
    }

    &:hover{
        background-color: #EEEEEE;
    }
`;

export const ToolIcon = styled(Icon)`
    color: ${
        props => props.inactive
        ? '#AAA'
        : '#000'
    };
`;

export const TextContainer = styled.textarea`
    width: 600px;
    height: 400px;
    resize: none;
    outline: none;
    border: none;
    padding: 20px 5px;
    font-size: 14px;
    letter-spacing: 0.5px;
    border-radius: 12px;
`;

export const InfoContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`;
