import React from "react";
import { useState, useEffect } from "react";
import { Card, Marcas, FabButton} from "./styled";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import BarraSuperior from "../../components/barraSuperior";

const Home = () => {

    const [fabricantes, setFabricantes] = useState([]);    

    useEffect(() => {
        axios.get("http://localhost:3000/fabricantes")
        .then(response => {
            setFabricantes(response.data);
        })}, []);

    const todosFabricantes = fabricantes.map((fabricante) => {

        return (
            <>
                <Card key={fabricante.id}>
                    <h1>{fabricante.nome}</h1>
                    <img src={fabricante.logo}/>
                    <Link to={`/carPage/${fabricante.id}/${fabricante.nome}`}><FabButton className="button">Modelos {fabricante.nome}</FabButton></Link>
                </Card>
            </>
        )
    })
    

    return (
        <>
            <BarraSuperior/>
            <Marcas>
                {todosFabricantes}
            </Marcas>
        </>
    )
}

export default Home;