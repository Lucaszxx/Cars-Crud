import React, { useEffect, useState } from "react";
import {Field, Form, ErrorMessage, Formik} from "formik";
import * as yup from "yup";
import { Card, PurpleButton } from "./styled";
import BarraSuperior from "../../components/barraSuperior";
import axios from "axios";
import { useParams } from "react-router-dom";


const UpdateCar = () => {

    const {id, nome, ano, fabricantesNome} = useParams();
    const [carImage, setCarImage] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/modelos/${id}`)
        .then((response) => {
            setCarImage(response.data.imagem);
        })
    }, [])
    
    const validationPatch = yup.object().shape({
        nome: yup.string(),
        fabricante: yup.string(),
        imagem: yup.string(),
        ano: yup.number()
    });

const handClickEdit = (values) => {
    axios({
        method: 'patch',
        url: `http://localhost:3000/modelos/${id}`,
        data: values
    })
    .then((response) => {
        alert("Carro atualizado com sucesso!");
        setTimeout(function(){
            window.location.href = '/';
        }, 1);
    })
    .catch((error) => {
        alert("Algo deu errado...")
        console.log(error);
    })
}

    return (
        <>
            <BarraSuperior/>
            <Card>
                <h1>Alterar</h1>
                <h3>Imagem atual</h3>
                <img className="carImage" src={carImage}/>
                <Formik validationSchema={validationPatch} initialValues={{nome: nome, fabricante: fabricantesNome, ano: ano}} onSubmit={handClickEdit}>
                    <Form>
                        <div className="divForm">
                            <h3>Nome</h3>
                            <Field className="form-field" name="nome" placeholder="Nome do modelo"/>
                            <div className="form-error"><ErrorMessage name="nome"/></div>
                        </div>
                        <div className="divForm">
                            <h3>Fabricante</h3>
                            <Field className="form-field" name="fabricante" placeholder="Fabricante do modelo"/>
                            <div className="form-error"><ErrorMessage name="fabricante"/></div>
                        </div>
                        <div className="divForm">
                            <h3>Imagem</h3>
                            <Field className="form-field" type="url" name="imagem" placeholder="Caso queira alterar a imagem, insira o novo link:"/>
                            <div className="form-error"><ErrorMessage name="imagem"/></div>
                        </div>
                        <div className="divForm">
                            <h3>Ano</h3>
                            <Field className="form-field" name="ano" placeholder="Ano de fabricação"/>
                            <div className="form-error"><ErrorMessage name="ano"/></div>
                        </div>
                        <PurpleButton type="submit">Alterar</PurpleButton>
                    </Form>
                </Formik>
            </Card>
        </>
    )
}

export default UpdateCar;