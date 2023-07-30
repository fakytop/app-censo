import { useRef, useState } from "react";

const Login = () => {
    const username = useRef(null);
    const password = useRef(null);
    const [msg, setMsg] = useState("");
    const [showMessageError, setShowMessageError] = useState(false);

    const iniciarSesion = () => {
        if(username.current.value !== "" && password.current.value !== "" ){
            const data = {
                "usuario": username.current.value,
                "password": password.current.value
            }

            fetch('https://censo.develotion.com//login.php',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(r => r.json())
            .then(rjson => {
                if(rjson.codigo === 200){
                    localStorage.setItem("idUsuario", rjson.id);
                    localStorage.setItem("apiKey", rjson.apiKey);
                    console.log(localStorage.getItem("idUsuario"));                        
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
            {showMessageError && (
            <div class="alert alert-warning" role="alert">{msg}</div>
            )}
        </>
    )
}

export default Login;