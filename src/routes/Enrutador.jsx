import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import MenuLateral from "../components/MenuLateral";
import Home from "../pages/Home";


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
    }
]);