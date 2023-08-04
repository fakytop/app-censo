import { useEffect, useRef, useState } from "react";
import endpoints from "../../services/config";
import { useNavigate } from "react-router-dom";

const Login = () => {




    const username = useRef(null);
    const password = useRef(null);
    const [msg, setMsg] = useState("");
    const [showMessageError, setShowMessageError] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("apiKey") !== null && localStorage.getItem("idUsuario") !== null){
            navigate('/dashboard');
        }
    },[])

    const navigateSignup = () => {
        navigate('/signup');
    }


    const captData = () => {
        if (username.current.value !== "" && password.current.value !== "") {
            const data = {
                "usuario": username.current.value,
                "password": password.current.value
            }
            iniciarSesion(data);
        } else {
            showError("Usuario y contraseña no pueden estar vacíos.");

        }
    }

    const iniciarSesion = async (data) => {

            await fetch(endpoints.base_url + endpoints.post_login, {
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
                        console.log(localStorage.getItem("idUsuario"));

                        navigate("/dashboard");
                    } else {
                        showError(rjson.mensaje);
                    }
                })

        }

        const showError = msjError => {
            setMsg(msjError);
            setShowMessageError(true);
            setTimeout(() => {
                setShowMessageError(false);
                console.log(msjError);
            }, 3000)
        }
        //TODO: Agregar evento en el botón de inicio de sesión, para que aparezca deshabilitado cuando no se haya escrito nada en los inputs
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
                    <button type="button" className="btn btn-success form-control" onClick={captData}>Iniciar Sesión</button>
                </div>
                <div>
                    <p>Aún no tienes usuario? <button type="button" className="btn btn-link" onClick={navigateSignup}>Regístrate aquí.</button></p>
                </div>
                {showMessageError && (
                    <div class="alert alert-warning" role="alert">{msg}</div>
                )}
            </>
        )
    }

    export default Login;