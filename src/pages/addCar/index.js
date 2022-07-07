import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import BarraSuperior from "../../components/barraSuperior";
import * as yup from "yup";
import axios from "axios";
import {AllDiv, PurpleButton} from "./styled"

const AddCar = () => {

    // const [modelos, setModelos] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:3000/modelos")
    //     .then((response) => {
    //         setModelos(response.data)
    //     })
    // }, []);    



    const validationPost = yup.object().shape({
        nome: yup.string().required("Por favor, insira o nome do modelo"),
        fabricantesNome: yup.string().required("Por favor, insira o nome do fabricante do modelo"),
        imagem: yup.string().required("Por favor, insira o link da imagem do modelo"),
        ano: yup.number().required("Por favor, insira o ano de fabricação do modelo")
        // 
        });


        const handleClickPost = (values) => {
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/modelos',
                    data: values
                })
                .then((response) => {
                    alert("Carro inserido com sucesso!");
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
        <AllDiv>
            <BarraSuperior/>
            <Formik initialValues={{}} onSubmit={handleClickPost} validationSchema={validationPost}>
                <Form className="form-group">
                    <h1>Add a new Car</h1>
                    <div className="form-div">
                        <h3>Nome</h3>
                        <Field className="form-field" name="nome" placeholder="Nome do modelo"/>

                        <ErrorMessage className="form-error" component="span" name="nome"/>
                    </div>
                    <div className="form-div">
                        <h3>Fabricante</h3>
                        <Field className="form-field" name="fabricantesNome" placeholder="Nome da fabricante"/>

                        <ErrorMessage className="form-error" component="span" name="fabricantesNome"/> 
                    </div>
                    <div className="form-div">
                        <h3>Imagem</h3>
                        <Field className="form-field" name="imagem" placeholder="Link da imagem"/>
                        <ErrorMessage className="form-error" component="span" name="imagem" />
                    </div>
                    <div className="form-div">
                        <h3>Ano</h3>
                        <Field className="form-field" name="ano" placeholder="Ano de fabricação"/>
                        <ErrorMessage className="form-error" component="span" name="ano"/>
                    </div>
                    <PurpleButton className="form-button" type="submit">Adicionar</PurpleButton>
                </Form>
            </Formik>
        </AllDiv>
    )
}

export default AddCar;