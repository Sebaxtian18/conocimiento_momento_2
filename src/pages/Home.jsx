import "../../public/Styles.css"
import Contenido from "../components/Contenido";
import MenuLateral from "../components/MenuLateral";
import "./Home.css"

function Home() {
    return(
        <section className="home">
            <MenuLateral />
            <Contenido />
        </section>
    )
}
export default Home;