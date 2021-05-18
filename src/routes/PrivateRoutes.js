import NotFound from "../pages/NotFound";
import Conspiracies from "../pages/Conspiracies";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import { useState } from "react";
import tierraplana from "../images/tierra-plana.jpg"
import Conspiracy from "../pages/Conspiracy";
import hombreLuna from "../images/hombre-luna.jpg";
import torresGemelas from "../images/torres-gemelas.jpg"
import NewConspiracy from "../pages/NewConspiracy";
import Intro from "../pages/Intro";
import Time from "../pages/Time";

const PrivateRoutes = () => {

    const [cards, setcards] = useState([
        {id:1, src: tierraplana, title: "La teoria del terraplanismo", description:"Por que se dice que la tierra es plana", date:'15/10/2020 10:30', type: "naturaleza"},
        {id:2, src: hombreLuna, title: "Habra llegado el hombre a la luna?", description:"Se dice que el hombre no ha llegado a la luna aun", date: '15/10/2020 10:30', type:"espacial"}, 
        {id:3, src: torresGemelas, title: "Autoatentado?", description:"Se dice que el hombre no ha llegado a la luna aun", date: '15/10/2020 10:30', type:"sucesos"},   
    ]) 

    const [conspiraciesTypes, setConspiraciesTypes] = [
        {id:1, name:"naturaleza"},
        {id:2, name:"espacial"},
        {id:3, name:"sucesos"}
    ]

    return ( 
        <Switch>
            <Route exact path="/conspiracies" component= {() => <Conspiracies conspiracies={cards} />} />
            <Route exact path="/newConspiracy" component= {() => <NewConspiracy conspiracies={cards} types={conspiraciesTypes}/>} />
            <Route exact path="/conspiracy/:consp"  component= {() => <Conspiracy conspiracies={cards} />} />
            <Route exact path="/time"  component= {() => <Time conspiracies={cards} />} />
            <Route exact path="/" component= {Intro} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default PrivateRoutes;
