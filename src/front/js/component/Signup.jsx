import React from "react";


export const Signup = () => {
    return(
        <form>
    <div className="mb-3">
        <label htmlFor="Ejemplo: Daniel" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="exampleInputNombre" aria-describedby="NombreHelp"></input>
        <div id="nameHelp" className="form-text">Nunca compartiremos su nombre con nadie más.</div>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" htmlFor="exampleCheck1">Verificado</label>
  </div>
  <button type="submit" className="btn btn-primary">Enviar</button>
</form>
    )
}