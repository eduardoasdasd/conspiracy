import { useState } from "react";


const Register = () => {

  const [cons, setCons] = useState("")

  const getConst = (e) => {
    console.log(e);

    setCons(e.target.value);
  }
  return (
    <>
      <form className="register">
        <div className="div-register">
          <h1 className="">Registro</h1>
          <h3>¿ Sobre que conspiracion le gustaria conocer ?</h3>

          <span className="p-float-label label-input-cons">
            <input type="text" id="username" onChange={getConst} className="p-inputtext-lg p-d-block input-cons" value={cons} />
            <label htmlFor="username">Conspiracion</label>
          </span>

          <input type="submit" label="Registrar" className="p-button-primary" />
        </div>
      </form>
    </>
  )
}

export default Register;