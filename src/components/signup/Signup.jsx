import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [msg, setMsg] = useState("");
    const [showMessageError, setShowMessageError] = useState(false);
    const username = useRef("");
    const password = useRef("");
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const registrarse = () => {
        if (username.current.value !== "" && password.current.value !== "") {
            const data = {
                "usuario": username.current.value,
                "password": password.current.value
            }

            fetch('https://censo.develotion.com//usuarios.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(r => r.json())
                .then(rjson => {
                    if (rjson.codigo === 200) {
                        localStorage.setItem("idUsuario", rjson.id);
                        localStorage.setItem("apiKey", rjson.apiKey);
                        navigate('/dashboard');
                    } else {
                        showError(rjson.mensaje);
                    }
                })
        } else {
            showError("Usuario y contraseña no pueden estar vacíos.");

        }
    }

    const showError = msjError =>{
        setMsg(msjError);
        setShowMessageError(true);
        setTimeout(() => {
            setShowMessageError(false);
            console.log(msjError);
        },3000)
    }
    //TODO: Evento del boton para que se habilite y deshabilite igual que login.
    return (
        <>
            <h1>Registrarse</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingUser" placeholder="name@example.com" ref={username} />
                <label htmlFor="floatingUser">Usuario</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={password} />
                <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <div>
                <button type="button" className="btn btn-success form-control" onClick={registrarse}>Registrarse</button>
            </div>
            <div>
                <p>Ya tienes cuenta? <button type="button" className="btn btn-link" onClick={navigateLogin}>Ingresa aquí.</button></p>
            </div>
            {showMessageError && (
            <div class="alert alert-warning" role="alert">{msg}</div>
            )}
        </>
    )
}

export default Signup;