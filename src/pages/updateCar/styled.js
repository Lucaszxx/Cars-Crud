import styled from "styled-components";

const Card = styled.div `
    align-items: center;
    text-align: center;
    width: 100%;
    height: 102%;
    background-color: #18171D;
    margin-top: -2%;

    h1 {
        color: #7a297a;
        text-shadow: 5px 5px black;
    }

    h3 {
        color: white;
    }

    .divForm {
        color: white;
    }

    .form-field {
        color: snow;
        background-color: black;
        border: solid 2px #800080;
        height: 40px;
        width: 30%;
    }

    .form-error {
        color: red;
        display: block;
    }

    .carImage {
        width: 50%;
        border-radius: 8px;
    }
`

const PurpleButton = styled.button `
    color: snow;
    margin-top: 3%;
    align-items: center;
    height: 50px;
    width: 40%;
    border-radius: 4px;
    background-color: #7a297a;
    border: solid #800080; 
    transition: 0.5s;
    margin-bottom: 1%;
    cursor: pointer;

    :hover {
        background-color: green;
        
    }
`


export {Card, PurpleButton};