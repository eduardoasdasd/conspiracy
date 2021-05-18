import { useState } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

const NewConspiracy = ({conspiracy, types}) => {

  const [selectedType, setSelectedType] = useState(null);
  const [selectedCity1, setSelectedCity1] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
  
  const [cons, setCons] = useState({
    title: "",
    description: ""
  })

  const onCityChange = (e) => {
    setSelectedCity1(e.value);
}

  const getConst = (e) => {
    const { value, name } = e.target;
    setCons({
        ...cons,
        [name]: value
    });

    setCons(e.target.value); 
  }

  const fileSelectedHandler = (e) =>{
    console.log(e.target.files[0])
  }
  
  const onTypeChange = (e) => {
    setSelectedType(e.value);
}



  return (
    <>
      <form className="register">
        <div className="div-register">
          <h1>Nueva Conspiracion</h1>

          <h3>Titulo</h3>
            <InputText id="title" name="title" onChange={getConst} className="p-inputtext-lg p-d-block input-cons" value={cons.title} />
            <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />
            <h3>Descripcion</h3>
            <InputTextarea rows={5} cols={30} id="description" name="description" onChange={getConst} className="p-inputtext-lg p-d-block input-cons" value={cons.description} autoResize />
            <h3>Imagen</h3> 
            <input type="file" onChange={fileSelectedHandler} style={{color:"white", placeSelf:"center"}}/>
            <h3></h3>
            <Button label="Añadir" icon="pi pi-check" className="p-button-primary" />
        </div> 
      </form>
    </>
  )
}

export default NewConspiracy;