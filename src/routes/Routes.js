
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import tierraplana from "../images/tierra-plana.jpg"

import hombreLuna from "../images/hombre-luna.jpg";
import torresGemelas from "../images/torres-gemelas.jpg"
import { useState } from "react";
import PublicHeader from "../components/PublicHeader";
import hasData from "../helpers/hasData";

const Routes = () => {

    const [cards, setcards] = useState([
        { id: 1, src: tierraplana, title: "La teoria del terraplanismo", description: "Por que se dice que la tierra es plana", date: '15/10/2020 10:30', type: "naturaleza" },
        { id: 2, src: hombreLuna, title: "Habra llegado el hombre a la luna?", description: "Se dice que el hombre no ha llegado a la luna aun", date: '15/10/2020 10:30', type: "espacial" },
        { id: 3, src: torresGemelas, title: "Autoatentado?", description: "Se dice que el hombre no ha llegado a la luna aun", date: '15/10/2020 10:30', type: "sucesos" },
    ])

    const [conspiraciesTypes, setConspiraciesTypes] = [
        { id: 1, name: "naturaleza" },
        { id: 2, name: "espacial" },
        { id: 3, name: "sucesos" }
    ]

    const [currentUser, setCurrentUser] = useState({nombre:"asdasd"})

    return (
        <BrowserRouter>

            {!hasData(currentUser) ?
            <>
            <PublicHeader />
            <PublicRoutes cards={cards} conspiraciesTypes={conspiraciesTypes} />
            </>
            :
            <>
                <Header />
                <PrivateRoutes cards={cards} conspiraciesTypes={conspiraciesTypes} />
            </>
            }
        </BrowserRouter>

    )

}

export default Routes;