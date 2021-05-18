import { Link, useHistory } from "react-router-dom"
import { TabMenu } from 'primereact/tabmenu';
import { useState } from "react";

const Header = () => {
  const history = useHistory()
  const [activeItem, setActiveItem] = useState("");
  const items = [
    {label: 'Conspiraciones', icon: 'pi pi-fw pi-calendar'},
    {label: 'Crear conspiracion', icon: 'pi pi-fw pi-pencil'},
    {label: 'Logout', icon: 'pi pi-fw pi-file'},  
];
  const setActive =(e)=>{
    
    setActiveItem(e.label);
    if(e.label==="Conspiraciones"){
      history.push("/conspiracies");
    }
    else if(e.label==="Crear conspiracion"){
      history.push("/newConspiracy");
    }
    else {
      history.push("/");
    }
  }
  return (
    <div className="header-container">
      <TabMenu model={items} activeItem={activeItem} onTabChange={(e) => setActive(e.value)}/>
    </div>
  )
}
export default Header;