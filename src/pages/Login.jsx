import { useState } from "react";
import logo from "../assets/logo.svg";
import  "./Login.css";
import '../../public/Styles.css'
import {Link, useNavigate} from 'react-router-dom'


function Login() {
    const navigate = useNavigate();
    const ingresar = ()=>{
        navigate("/home")
    }
    
    return(
        <section className="login">
            <form action="" className="login_form">
                <div className="contenedor_img">
                    <img src={logo} alt="logo de la marca" />    
                </div>
                <div className="contenedor_inputs">
                    <input type="text" placeholder="Usuario"/>
                    <input type="text"placeholder="Contraseña" />
                    <button type="button" onClick={ingresar}>Ingresar</button>                                    
                    <Link to="/registro">¿No tienes cuenta?</Link>
                </div> 
            </form>
        </section>
    )
}

export default Login;