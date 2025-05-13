import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import MenuLateral from "../components/MenuLateral";
import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import AboutUs from "../pages/AboutUs";
import Contacto from "../pages/Contacto";


export const enrutador = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registro",
        element: <Registro />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "servicios",
        element: <Servicios />
    },
    {
        path: "/aboutus",
        element: <AboutUs />
    },
    {
        path:"/contacto",
        element: <Contacto />
    }
]);