function Header({setRoute})
{
    return(
        <header>
            <a href="">
                <h1>Modo cubano</h1>
            </a>
            <div className="headerButtons">
                <button onClick={()=>setRoute("Categories")}>Categorías</button>
                <button onClick={()=>setRoute("/")}>Productos</button>
            </div>
            <div className="headerButtons loginButtons">
                <button onClick={()=>setRoute("Login")}>Iniciar Sesion</button>
                <button onClick={()=>setRoute("Register")}>Registrarse</button>
            </div>
        </header>
    );
}
export default Header;