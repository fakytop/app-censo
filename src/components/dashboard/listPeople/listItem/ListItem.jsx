import React from 'react'
import { useSelector } from 'react-redux';
import DeleteItem from './deleteItem/DeleteItem';

const ListItem = (payload) => {
    const deptos = useSelector(state => state.deptos.deptos);
    const occupations = useSelector(state => state.occupations.occupations);

    return (
        <li className="list-group-item" key={payload.payload.id}>
            <div className='row'>
                <div className='col-1'>
                    <img src={"https://censo.develotion.com/imgs/" + occupations.find(occ => occ.id === payload.payload.ocupacion).id + ".png"} alt={occupations.find(occ => occ.id === payload.payload.ocupacion).ocupacion} />
                </div>
                <div className='col-9'>
                    {payload.payload.nombre}, Fecha: {payload.payload.fechaNacimiento}, {deptos.find(dpto => dpto.id === payload.payload.departamento).nombre}.
                </div>
                <div className='col-2'>
                    <DeleteItem idCenso={payload.payload.id} />
                </div>
            </div>
        </li>
    )
}

export default ListItem;

