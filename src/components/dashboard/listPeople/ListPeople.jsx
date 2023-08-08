import { useSelector } from "react-redux";
import ListItem from "./listItem/ListItem";
import Options from "../addPerson/options/Options";
import { useRef, useState } from "react";

const ListPeople = () => {

    const people = useSelector(state => state.persons.people);
    const occupations = useSelector(state => state.occupations.occupations);
    const [idOccupation, setIdOccupation] = useState("-1");
    const idOccupationRef = useRef("")

    const filterOccupation = () => {
        setIdOccupation(idOccupationRef.current.value)
    }

    return (
        <div className="col-md-6 dropdown" data-bs-theme="light">
            <div className="card" style={{height: '430px'}}>
                <div className="card-header">Listado de Personas</div>
                <div className="card-body" style={{ overflowY: 'scroll' }}>
                    <div className="form-group">
                        <label htmlFor="filtroOcupacion">Filtrar por Ocupación:</label>
                        <select className="form-control" id="filtroOcupacion" defaultValue={""} ref={idOccupationRef} onChange={filterOccupation}>
                            <option value={"-1"}>Todos</option>
                            {
                                occupations.map(occ => <Options key={occ.id} value={occ.id} name={occ.ocupacion}/>)
                            }
                        </select>
                    </div>
                    <ul className="list-group" id="listadoPersonas">
                        {
                            idOccupation === "-1" ? people.map(p => <ListItem key={p.id} payload={p} />) : people.filter(p => p.ocupacion + "" === idOccupation + "").map(p => <ListItem key={p.id} payload={p} />)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListPeople;


