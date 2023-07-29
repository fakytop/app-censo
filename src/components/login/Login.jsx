import { useRef } from "react";

const Login = () => {
    const username = useRef(null);
    const password = useRef(null);

    const iniciarSesion = () => {
        alert(username.current.value+ " " + password.current.value);
    }

    return (
        <>
            <h1>Iniciar Sesión</h1>
            <div className="form-floating mb-3">
                <input type="email" ref={username} className="form-control" id="floatingUser" placeholder="name@example.com" />
                <label htmlFor="floatingUser">Usuario</label>
            </div>
            <div className="form-floating">
                <input type="password" ref={password} className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <div>
                <button type="button" className="btn btn-success form-control" onClick={iniciarSesion}>Iniciar Sesión</button>
            </div>
        </>
    )
}

export default Login;