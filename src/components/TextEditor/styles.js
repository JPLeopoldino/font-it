import styled from 'styled-components';
import { Editable } from 'slate-react';

export const TextArea = styled(Editable)`
    width: 600px;
    height: 400px;
    padding: 20px 5px;
    font-size: 14px;
    letter-spacing: 0.5px;
    border-radius: 12px;
    overflow-y: scroll;
`;

export const CodeContainer = styled.pre`
    color: #FFF;
    background-color: #222;
    padding: 20px 10px 20px 30px;
    border-radius: 5px;
    margin: 5px;

    &::before{
        content: '';
        background-color: #999;
        width: 1px;
        height: 10px;
        position: absolute;
        left: 25px;
        transform: rotate(-40deg);
    }
    &::after{
        content: '';
        background-color: #999;
        width: 1px;
        height: 10px;
        position: absolute;
        left: 25px;
        transform: rotate(40deg) translate(5px, 6px);
    }
`;