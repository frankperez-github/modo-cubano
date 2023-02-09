function Login({setRoute})
{
    return(
        <div className="Login">
            <form action="">
                <input required={true} type="text" placeholder="usename"/>
                <input required={true} type="password" placeholder="password"/>
                <button className="loginButton">Iniciar Sesion</button>
                <p>No tienes cuenta aún? <a onClick={()=>setRoute("Register")}>registrate</a></p>
            </form>
        </div>
    );
}
export default Login;