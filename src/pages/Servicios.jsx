import "../../public/Styles.css"
import "./Servicios.css"
import MenuLateral from "../components/MenuLateral";
import Card from "../components/Card";


function Servicios() {
    return(
        <section className="section_servicios">
            <MenuLateral />
            <div className="contenido_servicios">
                <Card />
            </div>
        </section>
    )
}
export default Servicios;