import styled from 'styled-components';

const LogoImage = styled.img `
    width: 10%;
    height: 100px;

`

const ContLogo = styled.div `
    position: relative;
    background-color: #18171D;

    button {
        position: absolute;
        margin-left: 75%;
        margin-top: 2%;
        background-color: #7a297a;
        color: white;
        width: 10%;
        height: 45%;
        border: solid #800080 2px;
        border-radius: 2px;
        transition: 0.5s;
        font-size: medium;
        cursor: pointer;
        font-family: 'JetBrains Mono', monospace;
        :hover {
            background-color: #18171D;
        }
    }

`

export {LogoImage, ContLogo};