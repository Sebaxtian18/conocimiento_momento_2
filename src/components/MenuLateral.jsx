import "./MenuLateral.css"
function MenuLateral() {
    return(
        <aside className="menu_lateral">
            <h1>Home</h1>
            <button className="btn_menu_lateral">Servicios</button>
            <button className="btn_menu_lateral">Contacto</button>
            <button className="btn_menu_lateral">Acerca de</button>
            <button className="btn_menu_lateral">Cerrar Sesión</button>
        </aside>
    )
}
export default MenuLateral;