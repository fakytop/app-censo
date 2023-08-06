import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import endpoints from "../../../services/config";
import Options from "./options/Options";
import { addNewPerson } from "../../../features/personsSlice";
import { addNewRegistered } from "../../../features/allRegistered";


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
    const [msg, setMsg] = useState("");
    const [showMessageError, setShowMessageError] = useState(false);


    const showError = msjError => {
        setMsg(msjError);
        setShowMessageError(true);
        setTimeout(() => {
            setShowMessageError(false);
        }, 3000)
    }

    const saveNewPerson = (event) => {
        event.preventDefault();
        const data = {
            "idUsuario": localStorage.getItem('idUsuario'),
            "nombre": nameSelected.current.value,
            "departamento": parseInt(dpto.current.value),
            "ciudad": parseInt(citySelected.current.value),
            "fechaNacimiento": dateSelected.current.value,
            "ocupacion": parseInt(occupationSelected.current.value)
        }


        if (data.nombre !== "" && !isNaN(data.departamento) && !isNaN(data.ciudad) && data.fechaNacimiento !== "" && !isNaN(data.ocupacion)) {
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
                        dispatch(addNewPerson(data));
                        dispatch(addNewRegistered());
                        nameSelected.current.value = "";
                        dpto.current.value = "";
                        citySelected.current.value = "";
                        dateSelected.current.value = "";
                        occupationSelected.current.value = "";
                    } else {
                        showError(rjson.mensaje);
                    }
                })
        } else {
            showError("Debe completar todos los campos del formulario para poder ingresar un nuevo censo.");
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

    return (
        <div className="col-md-4">
            <div className="card" style={{height: '360px'}}>
                <div className="card-header">Agregar Persona</div>
                <div className="card-body">
                    <form id="formularioPersona">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" className="form-control" id="nombre" required ref={nameSelected} />

                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="departamento">Departamento:</label>
                                <select className="form-control" id="departamento" required ref={dpto} onChange={dptoSelected} defaultValue={""}>
                                    <option value="" disabled>Seleccione un Departamento</option>
                                    {
                                        deptos.map(dpto => <Options value={dpto.id} name={dpto.nombre} />)
                                    }
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="ciudad">Ciudad:</label>
                                <select className="form-control" id="ciudad" required defaultValue={""} ref={citySelected}>
                                    <option value="" disabled>Seleccione una ciudad</option>
                                    {
                                        cities.map(city => <Options value={city.id} name={city.nombre} />)
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                            <input type="date" className="form-control" id="fechaNacimiento" required ref={dateSelected} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="ocupacion">Ocupación:</label>
                            <select className="form-control" id="ocupacion" required defaultValue={""} ref={occupationSelected}>
                                <option value="" disabled>Seleccione una ocupación</option>
                                {
                                    occupations.map(occ => <Options value={occ.id} name={occ.ocupacion} />)
                                }
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary form-control" onClick={saveNewPerson}>Guardar</button>
                        {showMessageError && (
                            <div className="alert alert-warning" role="alert">{msg}</div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPerson;

