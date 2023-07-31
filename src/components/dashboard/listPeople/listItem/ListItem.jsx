import React from 'react'
import { useSelector } from 'react-redux';

const ListItem = (payload) => {
    const deptos = useSelector(state => state.deptos.deptos);
    const occupations = useSelector(state => state.occupations.occupations);
    return (
        <tr>
            <th scope="row">{payload.payload.nombre}</th>
            <td>{payload.payload.fechaNacimiento}</td>
            <td>{deptos.find(dpto => dpto.id === payload.payload.departamento).nombre}</td>
            <td>{occupations.find(occ => occ.id === payload.payload.ocupacion).ocupacion}</td>
            <td><button type="button" className="btn btn-outline-danger">Eliminar</button></td>
        </tr>
    )
}

export default ListItem