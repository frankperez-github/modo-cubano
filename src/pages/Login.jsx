function Login({setRoute})
{
    return(
        <div className="Login">
            <form action="">
                <input type="text" placeholder="usename"/>
                <input type="password" placeholder="password"/>
                <button className="loginButton">Iniciar Sesion</button>
                <p>No tienes cuenta aún? <a onClick={()=>setRoute("Register")}>registrate</a></p>
            </form>
        </div>
    );
}
export default Login;