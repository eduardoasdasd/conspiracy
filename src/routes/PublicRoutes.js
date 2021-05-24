import NotFound from "../pages/NotFound";

import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Intro from "../pages/intro/Intro";
import Conspiracies from "../pages/Conspiracies";


const PublicRoutes = ({cards, conspiraciesTypes}) => {



    
    

    return ( 
        <Switch>
            <Route exact path="/conspiracies" component= {() => <Conspiracies conspiracies={cards} />} />
            <Route exact path="/register" component= {Register} />
            <Route exact path="/" component= {Intro} />
            
            <Route component={NotFound} />
        </Switch>
    )
}

export default PublicRoutes;