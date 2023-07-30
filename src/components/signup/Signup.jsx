import { useRef, useState } from "react"

const Signup = () => {
    const [msg, setMsg] = useState("");
    const [showMessageError, setShowMessageError] = useState(false);
    const username = useRef("");
    const password = useRef("");



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
                    } else {
                        showError(rjson.mensaje);
                    }
                })
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
            {showMessageError && (
            <div class="alert alert-warning" role="alert">{msg}</div>
            )}
        </>
    )
}

export default Signup;