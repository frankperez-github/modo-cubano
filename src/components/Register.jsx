function Register({setRoute})
{
    return(
        <div className="Login">
            <form action="">
                <input type="text" placeholder="usename"/>
                <input type="password" placeholder="password"/>
                <button className="loginButton">Registrarme</button>
                <p>Ya tienes una cuenta? <a onClick={()=>setRoute("Login")}>iniciar sesión</a></p>

            </form>
        </div>
    );
}
export default Register;