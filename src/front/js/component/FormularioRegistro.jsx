import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const FormularioRegistro = () => {
    // Obtenemos el contexto
    const { actions } = useContext(Context);

    // Estado local para manejar los valores del formulario
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        contraseña: ""
    });

    // Función para manejar los cambios en los campos del formulario
    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = event => {
        event.preventDefault();
        
        // Llama a la función registerUser del contexto pasando los datos del formulario
        actions.registerUser(formData.nombre, formData.email, formData.contraseña);
    };

  

    
      return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputNombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="exampleInputNombre" name="nombre" onChange={handleChange} value={formData.nombre} />
                <div id="nameHelp" className="form-text">Nunca compartiremos su nombre con nadie más.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={handleChange} value={formData.email} />
                <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="contraseña" onChange={handleChange} value={formData.contraseña} />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" name="checkbox"></input>
                <label className="form-check-label" htmlFor="exampleCheck1">Verificado</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};