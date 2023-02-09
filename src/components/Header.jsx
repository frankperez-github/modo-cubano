function Header({setRoute})
{
    return(
        <header>
            <a href="" className="logo">
                <h1>Modo cubano</h1>
            </a>
            <div className="headerButtons loginButtons" >
                <button className="loginButton" onClick={()=>setRoute("Orders")}>Órdenes</button>
                <button className="loginButton" onClick={()=>setRoute("Cart")}>Carrito</button>
                <button className="loginButton" onClick={()=>setRoute("Login")}>Iniciar Sesion</button>
                <button className="loginButton" onClick={()=>setRoute("Register")}>Registrarse</button>
            </div>
        </header>
    );
}
export default Header;