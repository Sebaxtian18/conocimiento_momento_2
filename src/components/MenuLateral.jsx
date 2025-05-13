import { useNavigate } from "react-router-dom";
import "./MenuLateral.css"
function MenuLateral() {
    const navigate = useNavigate();

    const irAServicios = () =>{
        navigate("/servicios")
    } 

    const irAContacto = () => {
        navigate("/contacto")
    }
    const irAAboutUs = () => {
        navigate("/aboutus")
    }
    const cerrarSesion = () => {
        navigate("/login")
    }
    return(
        <aside className="menu_lateral">
            <h1>Home</h1>
            <button className="btn_menu_lateral" onClick={irAServicios}>Servicios</button>
            <button className="btn_menu_lateral" onClick={irAContacto}>Contacto</button>
            <button className="btn_menu_lateral" onClick={irAAboutUs}>Acerca de</button>
            <button className="btn_menu_lateral" onClick={cerrarSesion}>Cerrar Sesión</button>
        </aside>
    )
}
export default MenuLateral;