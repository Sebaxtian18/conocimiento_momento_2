import "./Card.css";
import "../../public/Styles.css"
import logo from "../assets/logo.svg"

function Card() {
    return(
        <div className="card_servicios">
            <div className="img_card">
                <img src={logo} alt="" />
             </div>
            <div className="contenido_card">
                <em><u><p>Servicios</p></u></em>
            </div>
        </div>
    )
}
export default Card;