import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const AddPerson = () => {
    const [cities, setCities] = useState([]);
    const [occupations, setOccupations] = useState([]);
    const [idDpto, setIdDpto] = useState(null);
    const dpto = useRef(0);
    const nameSelected = useRef("");
    const citySelected = useRef(0);
    const dateSelected = useRef("");
    const occupationSelected = useRef(0);
    const deptos = useSelector(state => state.deptos.deptos)


    const saveNewPerson = () => {
        const data = {
            "idUsuario": localStorage.getItem('idUsuario'),
            "nombre": nameSelected.current.value,
            "departamento": parseInt(dpto.current.value),
            "ciudad": parseInt(citySelected.current.value),
            "fechaNacimiento": dateSelected.current.value,
            "ocupacion": parseInt(occupationSelected.current.value)
        }



        fetch('https://censo.develotion.com//personas.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': localStorage.getItem('apiKey'),
                'iduser': localStorage.getItem('idUsuario')
            },
            body: JSON.stringify(data)            
        })
        .then(r => r.json())
        .then(rjson => {
            console.log(rjson);
        })
    }

    const dptoSelected = () => {
        setIdDpto(dpto.current.value);
    }

    useEffect(() => {
        fetch('https://censo.develotion.com//ocupaciones.php',{
            headers: {
                'Content-Type': 'application/json',
                'apikey': localStorage.getItem('apiKey'),
                'iduser': localStorage.getItem('idUsuario')
        }})
        .then(r => r.json())
        .then(rjson => {
            setOccupations(rjson.ocupaciones);
        })
    }, [])
    

    useEffect(() => {
        fetch(`https://censo.develotion.com//ciudades.php?idDepartamento=${dpto.current.value}`, {
            headers: {
                'Content-Type': 'application/json',
                'apikey': localStorage.getItem('apiKey'),
                'iduser': localStorage.getItem('idUsuario')
            }
        })
        .then(r => r.json())
        .then(rjson => {
            setCities(rjson.ciudades);
        })
    },[idDpto])

    return (
        <>
            <h1>Censar Nueva Persona</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ref={nameSelected}/>
                <label htmlFor="floatingInput">Nombre</label>
            </div>
            <select className="form-select form-select-lg mb-3" aria-label="Large select example" ref={dpto} onChange={dptoSelected} defaultValue={""}>
                <option value="" disabled>Seleccione un Departamento</option>
                {
                    deptos.map(dpto => <option key={dpto.id} value={dpto.id}>{dpto.nombre}</option>)
                }
            </select>

            <select className="form-select form-select-sm" aria-label="Small select example" defaultValue={""} ref={citySelected}>
                <option value="" disabled>Seleccione una ciudad</option>
                {
                    cities.map(city => <option key={city.id} value={city.id}>{city.nombre}</option>)
                }
            </select>
            <div className="form-floating">
                <input type="date" className="form-control" id="floatingPassword" placeholder="Password" ref={dateSelected}/>
                <label htmlFor="floatingPassword">Fecha de Nacimiento</label>
            </div>
            <select className="form-select form-select-sm" aria-label="Small select example" defaultValue={""} ref={occupationSelected}>
                <option value="" disabled>Seleccione una ocupación</option>
                {
                    occupations.map(occ => <option key={occ.id} value={occ.id}>{occ.ocupacion}</option>)
                }
            </select>
            <button type="button" className="btn btn-success form-control" onClick={saveNewPerson}>Guardar</button>

        </>
    )
}

export default AddPerson;