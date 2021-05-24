import { useState } from "react";


const NewConspiracy = ({ conspiracy, types }) => {

  const [selectedType, setSelectedType] = useState(null);



  const [cons, setCons] = useState({
    title: "",
    description: ""
  })



  const getConst = (e) => {
    const { value, name } = e.target;
    setCons({
      ...cons,
      [name]: value
    });

    setCons(e.target.value);
  }

  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0])
  }

  const onTypeConspiracy = (e) => {
    setSelectedType(e.value);
  }



  return (
    <>
      <form className="register">
        <div className="div-register">
          <h1>Nueva Conspiracion</h1>

          <h3>Titulo</h3>
          <input type="text" id="title" name="title" onChange={getConst} className="p-inputtext-lg p-d-block input-cons" value={cons.title} />
          
          <select onChange={onTypeConspiracy} className="form-control select" >
            <option key={0} id={0} value="type" defaultValue >Seleccione un tipo</option>
            {types.length > 0 &&
              types.map((types) =>
                <option key={types.name} id={types.name} value={types.id} >{types.name}</option>
              )
            }
          </select>
          <h3>Descripcion</h3>
          <textarea rows={5} cols={30} id="description" name="description" onChange={getConst} className="p-inputtext-lg p-d-block input-cons" value={cons.description} autoResize />
          <h3>Imagen</h3>
          <div className="mb-3">
            <div>
              <input classname="form-control" onChange={fileSelectedHandler} type="file" id="formFile"/>
            </div>
          </div>
            <h3></h3>
            <input type="submit" label="Añadir" icon="pi pi-check" className="p-button-primary" />
          </div> 
      </form>
    </>
  )
}

export default NewConspiracy;