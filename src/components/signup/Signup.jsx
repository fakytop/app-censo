
const Signup = () => {
    return (
        <>
            <h1>Registrarse</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingUser" placeholder="name@example.com" />
                <label htmlFor="floatingUser">Usuario</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Contraseña</label>
            </div>
        </>
    )
}

export default Signup;