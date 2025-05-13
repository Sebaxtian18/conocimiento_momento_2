import "./Contacto.css"
import "../../public/Styles.css"
import MenuLateral from "../components/MenuLateral";
import Card from "../components/Card";

function Contacto() {
    return(
        <section className="section_contacto">
            <MenuLateral />
            <div className="cotenido_contacto">
                <Card />
            </div>
        </section>
    )
}
export default Contacto;