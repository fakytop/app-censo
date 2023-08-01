import React from 'react'

const ErrorNotFound = () => {
    return (
        <div className="error-container">
            <h1 className="display-1">404</h1>
            <h2 className="display-4">Página no encontrada</h2>
            <p className="lead">Lo sentimos, la página que estás buscando no existe.</p>
            <p>Por favor, verifica la URL o regresa a la <a href="/">página de inicio</a>.</p>
        </div>
    )
}

export default ErrorNotFound