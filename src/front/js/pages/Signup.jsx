import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {FormularioRegistro} from "/workspaces/Danielh-Autentication-con-Python-Flask-y-React.-DanielH/src/front/js/component/FormularioRegistro.jsx"

export const Signup = () => {
    return(
        <FormularioRegistro />
    )
}