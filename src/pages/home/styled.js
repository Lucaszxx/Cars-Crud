import styled from 'styled-components';

const Marcas = styled.div `
    margin-top: 1%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px 1px;
    color: black;

    h1 {
        font-weight: 20;
    }
`

const Card = styled.div `
    border: solid #800080 1px;
    margin-left: 1.5%;
    margin-right: 1.5%;
    text-align: center;
    height: 400px;
    border-radius: 4px;
    background-color: white;

    img {
        width: 90%;
        height: 200px;
    }
`

const FabButton = styled.button `
    height: 15%;
    width: 90%;
    margin-top: 10%;
    border-radius: 4px;
    background-color: #18171D;
    font-size: medium;
    font-weight: 20;
    border: solid black;
    color : snow;
    transition: 0.5s;
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;

    :hover {
        background-color:  #800080;
    }

    a {
        text-decoration: none;
        color: snow;
        font-size: larger;
        font-family: 'JetBrains Mono', monospace;
    }

`

export { Card, Marcas, FabButton};