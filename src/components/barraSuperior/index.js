import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images-crud/Logo.png';
import { LogoImage, ContLogo } from "./styled";


const BarraSuperior = () => {
    return (
            <ContLogo>
                <LogoImage src={Logo}/>
                <Link to="/"><button>Home</button></Link>
            </ContLogo>
    )
}

export default BarraSuperior;