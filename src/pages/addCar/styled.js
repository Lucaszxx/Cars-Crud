import styled from "styled-components";

const AllDiv = styled.div `
    .form-group { 
        text-align: center;
        align-items: center;      
        background-color: #18171D;
        width: 100%;
        margin-top: -22px;
        height: 698px;
    }

    h1 {
        text-align: center;
        color: #7a297a;
        text-shadow: 5px 5px black;
    } 

    .form-div {
        color: black;
        h3 {
            color: snow;
        }
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

export {AllDiv, PurpleButton};