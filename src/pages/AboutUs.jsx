import "../../public/Styles.css"
import "./AboutUs.css"
import Card from "../components/Card";
import MenuLateral from "../components/MenuLateral";

function AboutUs() {
    return(
        <section className="section_about_us">
            <MenuLateral />
            <div className="contenido_about_us">
                <Card />
            </div>
        </section>
    )
}
export default AboutUs;