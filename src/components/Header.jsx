import { useContext } from "react";
import CartProductsContext from "@/context/CartProductsContext";

function Header({setRoute, route})
{
    const{totalItems} = useContext(CartProductsContext);

    return(
        <header>
            <h1 className="logo" onClick={()=>setRoute("/")}>Modo cubano</h1>
            <div className="headerButtons loginButtons" >
                <button id={route === "Orders" ? "Selected" : ""} className="loginButton" onClick={()=>setRoute("Orders")}>Órdenes</button>
                <button id={route === "Cart" ? "Selected" : ""} className="loginButton" onClick={()=>setRoute("Cart")}>Carrito ({totalItems})</button>
                <button id={route === "Login" ? "Selected" : ""} className="loginButton" onClick={()=>setRoute("Login")}>Iniciar Sesion</button>
                <button id={route === "Register" ? "Selected" : ""} className="loginButton" onClick={()=>setRoute("Register")}>Registrarse</button>
            </div>
        </header>
    );
}
export default Header;