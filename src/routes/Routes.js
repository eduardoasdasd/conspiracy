
import { BrowserRouter} from "react-router-dom";
import Header from "../components/Header";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = () => {

    return (
        <BrowserRouter>
            
                <PublicRoutes  />
            
            
                <>
                    <Header/>
                    <PrivateRoutes />
                </>
            
        </BrowserRouter>

    )

}

export default Routes;