import { Button } from 'primereact/button'

const Login = () =>{
  
    return(
        <>
            <div className="login-container">
                <div className="login-title">Login</div>
                <Button label="Login" icon="pi pi-check" className="p-button-primary" />
                
            </div>
        </>
    )
}

export default Login;