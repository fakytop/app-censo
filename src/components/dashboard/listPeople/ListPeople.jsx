import { useSelector } from "react-redux";
import ListItem from "./listItem/ListItem";
import Options from "../addPerson/options/Options";
import { useRef, useState } from "react";

const ListPeople = () => {

    const people = useSelector(state => state.persons.people);
    const occupations = useSelector(state => state.occupations.occupations);
    const [idOccupation, setIdOccupation] = useState(-1);    
    const idOccupationRef = useRef("")


    const filterOccupation = () => {
        setIdOccupation(idOccupationRef.current.value)
    }

    return (
        <div>
            <h2>Personas censadas</h2>
            <select className="form-select form-select-sm" aria-label="Small select example" defaultValue={""} ref={idOccupationRef} onChange={filterOccupation}>
                <option value={-1}># | Todos</option>
                {
                    occupations.map(occ => <Options value={occ.id} name={occ.ocupacion}/>)
                }
            </select>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0" style={{ height: '300px', overflowY: 'scroll' }}>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha de Nacimiento</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Ocupación</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            idOccupation == -1 ? people.map(p => <ListItem payload={p} />) : people.filter(p=>p.ocupacion == idOccupation).map(p => <ListItem payload={p} />)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListPeople;