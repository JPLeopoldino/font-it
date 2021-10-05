import styled from "styled-components";

export const CodeMark = styled.code`
    color: #10f000;
    background-color: #081307;
    padding: 6px 12px;
    letter-spacing: 2px;
    border-radius: 2px;
`;

export const QuoteMark = styled.blockquote`
    background-color: #cadce2;
    padding: 14px 22px;
    margin: -5px 12px;
    border-radius: 4px;
    position: relative;

    &:after{
        content: '';
        width: 2px;
        height: 25px;
        background-color: #005875;
        position: absolute;
        left: 10px;
        top: 10px;
    }
`;