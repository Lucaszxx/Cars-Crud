import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BarraSuperior from "../../components/barraSuperior";
import { Modelos, Card, CardAdd } from "./styled";
import { Link } from "react-router-dom";

const CarPage = () => {

    const [modelos, setModelos] = useState([]);

    const {id, nome} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/fabricantes/${id}/modelos?fabricantesNome=${nome}`)
        .then(response => {
            setModelos(response.data);
        })
        
    }, []);


    const todosModelos = modelos.map((modelo) => {

        const clickDelete = () => {
            axios.delete(`http://localhost:3000/modelos/${modelo.id}`);
            alert("Modelo excluido com sucesso!");
            window.location.reload();
        }
    
    
        return (
            <>
                <Card key={modelo.id}>
                    <img src={modelo.imagem}/>
                    <div className="divList">
                        <li>{modelo.fabricantesNome}</li>
                        <li>{modelo.nome}</li>  
                        <li>{modelo.ano}</li>
                        <li>Id:{modelo.id}</li>
                        <button className="delete-button" onClick={clickDelete}>Excluir</button>
                        <Link to={`/updateCar/${modelo.id}/${modelo.nome}/${modelo.ano}/${modelo.fabricantesNome}`}><button className="edit-button">Alterar</button></Link>
                    </div>
                </Card>
            </>
        )
    })

    return (
        <>
            <BarraSuperior/>
            <Modelos>
                {todosModelos}
                <Link to="/AddCar">
                    <CardAdd className="addNewCar">
                        <img src="https://i.ibb.co/JHbhB0G/adicionarum.png"/>
                        <h1>Adicionar novo modelo</h1>
                    </CardAdd>
                </Link>
            </Modelos>
            
        </>
    )
}

export default CarPage;