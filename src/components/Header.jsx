function Header({setRoute, route})
{
    return(
        <header>
            <a href="" className="logo">
                <h1>Modo cubano</h1>
            </a>
            <div className="headerButtons loginButtons" >
                <button id={route === "Orders"&&"Selected"} className="loginButton" onClick={()=>setRoute("Orders")}>Órdenes</button>
                <button id={route === "Cart"&&"Selected"} className="loginButton" onClick={()=>setRoute("Cart")}>Carrito</button>
                <button id={route === "Login"&&"Selected"} className="loginButton" onClick={()=>setRoute("Login")}>Iniciar Sesion</button>
                <button id={route === "Register"&&"Selected"} className="loginButton" onClick={()=>setRoute("Register")}>Registrarse</button>
            </div>
        </header>
    );
}
export default Header;