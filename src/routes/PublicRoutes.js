import NotFound from "../pages/NotFound";

import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Intro from "../pages/Intro";


const PublicRoutes = () => {



    
    

    return ( 
        <Switch>
            <Route exact path="/" component= {Intro} />
            <Route exact path="/register" component= {Register} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default PublicRoutes;