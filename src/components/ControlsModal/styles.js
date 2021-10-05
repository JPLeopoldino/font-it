import styled from "styled-components";
import Icon from 'react-icons-kit';

export const BackgroundContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
`;

export const ModalContainer = styled.div`
    position: relative;
    background-color: #FFF;
    width: 300px;
    height: 600px;
    padding: 32px 12px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 5px;
    background-color: #efefef;
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
        background-color: #DDD;
    }
`;

export const CloseIcon = styled(Icon)`

`;

export const Title = styled.h3`
    color: #3d3d3d;
    font-size: 24px;
    margin: 0;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #CCC;
        bottom: -20px;
        left: 0;
    }
`;

export const CommandsContainer = styled.div`
    height: 89%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CommandRow = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Command = styled.h3`
    background-color: #3d3d3d;
    color: #FFF;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 14px;
    letter-spacing: 1px;
`;

export const CommandDesc = styled.p`
    width: 50%;
    text-align: start;
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;

// export const Input = styled.input`
//     width: 80%;
//     padding: 14px 12px;
//     border-radius: 5px;
//     outline: 1px solid #999;
//     border: none;
//     color: #111;
//     background-color: #EEE;
//     box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
//     transition: 0.2s ease;

//     &:focus{
//         color: #000;
//         background-color: #fefefe;
//         outline: 1.5px solid #888;
//         box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
//     }
// `;

// export const Button = styled.button`
//     padding: 12px 48px;
//     background-color: #222;
//     color: #FFF;
//     font-weight: bold;
//     font-style: 14px;
//     border-radius: 5px;
//     border: none;
//     cursor: pointer;
//     transition: 0.2s ease;
//     box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

//     &:hover{
//         background-color: #333;
//         box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
//     }
//     &:active{
//         transition: 0s;
//         color: #333;
//         background-color: #BBB;
//     }
// `;
