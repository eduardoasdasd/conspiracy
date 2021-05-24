import NotFound from "../pages/NotFound";
import Conspiracies from "../pages/Conspiracies";
import { Route, Switch } from "react-router-dom";

import { useState } from "react";

import Conspiracy from "../pages/Conspiracy";

import NewConspiracy from "../pages/NewConspiracy";
import Intro from "../pages/intro/Intro";
import Time from "../pages/Time";

const PrivateRoutes = ({cards, conspiraciesTypes}) => {

    

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
