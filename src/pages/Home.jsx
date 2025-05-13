import "../../public/Styles.css"
import MenuLateral from "../components/MenuLateral";
import "./Home.css"

function Home() {
    return(
        <section className="home">
            <MenuLateral />
            <div className="home_contenido">
                <p><em><u>Home</u></em></p>
            </div>
        </section>
    )
}
export default Home;