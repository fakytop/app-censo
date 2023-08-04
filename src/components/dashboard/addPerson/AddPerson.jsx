import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import endpoints from "../../../services/config";
import Options from "./options/Options";
import { addNewPerson } from "../../../features/personsSlice";


const AddPerson = () => {
    const [cities, setCities] = useState([]);
    const [idDpto, setIdDpto] = useState(null);
    const dpto = useRef(0);
    const nameSelected = useRef("");
    const citySelected = useRef(0);
    const dateSelected = useRef("");
    const occupationSelected = useRef(0);
    const deptos = useSelector(state => state.deptos.deptos);
    const occupations = useSelector(state => state.occupations.occupations);
    const dispatch = useDispatch();


    const saveNewPerson = () => {
        const data = {
            "idUsuario": localStorage.getItem('idUsuario'),
            "nombre": nameSelected.current.value,
            "departamento": parseInt(dpto.current.value),
            "ciudad": parseInt(citySelected.current.value),
            "fechaNacimiento": dateSelected.current.value,
            "ocupacion": parseInt(occupationSelected.current.value)
        }

        if(data.nombre !== "" && data.departamento !== "" && data.ciudad !== "" && data.fechaNacimiento !== "" && data.ocupacion !== "") {
            fetch(endpoints.base_url + endpoints.post_person, {
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
                    if (rjson.codigo === 200) {
                        data.id = rjson.idCenso;
                        dispatch(addNewPerson(data))
                    }
                })
    
        }

    }

    const dptoSelected = () => {
        setIdDpto(dpto.current.value);
    }

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
    }, [idDpto])
    //TODO: Controlar datos al ingresar persona. Ver posibilidad de deshabilitar botón hasta que lo envíe.
    //TODO: Componente para mostrar el total de personas censadas por el usuario.
        //TODO: debo mostrar x por Mvdeo y x por el resto del país.
    return (
        <>
            <h1>Censar Nueva Persona</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ref={nameSelected} />
                <label htmlFor="floatingInput">Nombre</label>
            </div>
            <select className="form-select form-select-lg mb-3" aria-label="Large select example" ref={dpto} onChange={dptoSelected} defaultValue={""}>
                <option value="" disabled>Seleccione un Departamento</option>
                {
                    deptos.map(dpto => <Options value={dpto.id} name={dpto.nombre} />)
                }
            </select>

            <select className="form-select form-select-sm" aria-label="Small select example" defaultValue={""} ref={citySelected}>
                <option value="" disabled>Seleccione una ciudad</option>
                {
                    cities.map(city => <Options value={city.id} name={city.nombre} />)
                }
            </select>
            <div className="form-floating">
                <input type="date" className="form-control" id="floatingPassword" placeholder="Password" ref={dateSelected} />
                <label htmlFor="floatingPassword">Fecha de Nacimiento</label>
            </div>
            <select className="form-select form-select-sm" aria-label="Small select example" defaultValue={""} ref={occupationSelected}>
                <option value="" disabled>Seleccione una ocupación</option>
                {
                    occupations.map(occ => <Options value={occ.id} name={occ.ocupacion} />)
                }
            </select>
            <button type="button" className="btn btn-success form-control" onClick={saveNewPerson}>Guardar</button>

        </>
    )
}

export default AddPerson;