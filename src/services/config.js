const endpoints = {
    base_url: 'https://censo.develotion.com/',
    post_signup: '/usuarios.php',
    post_login: '/login.php',
    get_depts: '/departamentos.php',
    get_cities_id: '/ciudades.php?idDepartamento=',
    get_cities: '/ciudades.php',
    get_registered_id: '/personas.php?idUsuario=',
    post_person: '/personas.php',
    delete_person: '/personas.php?idCenso=',
    get_occupations: '/ocupaciones.php',
    get_all_registered: '/totalCensados.php'
}

export default endpoints;