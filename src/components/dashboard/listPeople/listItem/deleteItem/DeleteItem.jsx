import React from 'react'
import endpoints from '../../../../../services/config';
import { useDispatch } from 'react-redux';
import { deletePerson } from '../../../../../features/personsSlice';
import { deleteRegistered } from '../../../../../features/allRegistered';

const DeleteItem = (idCenso) => {
    const dispatch = useDispatch();

    const deletePersonById = () => {
        fetch(endpoints.base_url+endpoints.delete_person+idCenso.idCenso, {
        method:'DELETE',    
        headers: {
                'Content-Type': 'application/json',
                'apikey': localStorage.getItem('apiKey'),
                'iduser': localStorage.getItem('idUsuario')
            }
        })
            .then(r => r.json())
            .then(rjson => {
                if (rjson.codigo === 200) {
                    dispatch(deletePerson(idCenso));
                    dispatch(deleteRegistered());
                }
            })


    }

    return (
        <button type="button" className="btn btn-outline-danger" onClick={deletePersonById}>Eliminar</button>
    )
}

export default DeleteItem