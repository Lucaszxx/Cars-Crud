import styled from "styled-components";

const Modelos = styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row: auto;
    gap: 10px 10px;
    margin-left: 0.1%;
    margin-right: 0.5%;
`

const Card = styled.div `
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 3%;
    align-items: center;
    text-align: center;
    border: solid #800080 1px; 
    height: 100%;
    width: 100%;
    background-color: black;
    border-radius: 8px;

    div li {
        margin-top: 2%;
        font-size: larger;
        list-style: none;
        /* font-family: 'JetBrains Mono', monospace; */
        color: snow;
        /* font-style: italic; */
        font-weight: 20;

    }

    .divList {
        margin-top: 2%;
    }

    div button {
    color: snow;
    height: 60px;
    width: 80%;
    margin-top: 3%;
    border-radius: 4px;
    background-color: #7a297a;
    border: 1px solid black; 
    transition: 0.5s;
    /* font-family: 'JetBrains Mono', monospace; */
    font-weight: 20;
    font-size: medium;
    cursor: pointer;

    }

    .delete-button {
        background-color:  #cc0000;
        border: 1px solid black;

        :hover {
            background-color: #ff4040;
        }
    }

    .edit-button {
        background-color: #800080;

        :hover {
            background-color: #BA55D3;
        }
    }

    img {
        width: 95%;
        height: 35%;
        border-radius: 8px;
        margin-top: 3%;
    }
`

const CardAdd = styled.div `
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 3%;
    align-items: center;
    text-align: center;
    border: solid #800080 1px; 
    height: 100%;
    width: 100%;
    color: white;
    background-color: black;
    font-family: 'JetBrains Mono', monospace;
    font-size: small;
    border-radius: 8px;

    img {
        width: 70%;
        margin-top: 30%;
    }

`

export { Modelos, Card, CardAdd };