function Register({setRoute})
{
    return(
        <div className="Login">
            <form action="">
                <input required={true} type="text" placeholder="usename"/>
                <input required={true} type="password" placeholder="password"/>
                <input required={true} type="mail" placeholder="e-mail"/>
                <button className="loginButton">Registrarme</button>
                <p>Ya tienes una cuenta? <a onClick={()=>setRoute("Login")}>iniciar sesión</a></p>
            </form>
        </div>
    );
}
export default Register;