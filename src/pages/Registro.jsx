import "./Login.css"
import logo from "../assets/logo.svg";
import { Link, useNavigate} from "react-router-dom";

function Registro() {
    const navigate = useNavigate();
    
    const ingresar = ()=>{
        navigate("/login")
    }
    return(
        <section className="login">
            <form className="registro_form">
                <div className="logo_registro">
                    <img src={logo} alt="logo de la marca" />
                </div>
                <div className="contenedor_inputs_registro">
                    <input type="text" placeholder="Usuario" />
                    <input type="text" placeholder="Contraseña" />
                    <input type="text" placeholder="Nombre"/>
                    <input type="text" placeholder="Correo"/>
                    <button type="button" onClick={ingresar}>Registrarse</button>
                    <Link to="/login"><p>¿Ya tienes cuenta?</p></Link>
                </div>
            </form>
        </section>
    )
}
export default Registro;