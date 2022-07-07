import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import CarPage from "../pages/carPage";
import AddCar from "../pages/addCar";
import UpdateCar from "../pages/updateCar";


const RoutesPages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Home />} exact path="/" />
                <Route element={ <CarPage />} exact path="/carPage/:id/:nome"/>
                <Route element={ <AddCar />} exact path="/addCar" />
                <Route element={ <UpdateCar />} exact path="/updateCar/:id/:nome/:ano/:fabricantesNome"/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPages;