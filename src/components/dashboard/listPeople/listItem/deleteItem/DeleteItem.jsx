import React from 'react'
import endpoints from '../../../../../services/config';
import { useDispatch } from 'react-redux';
import { deletePerson } from '../../../../../features/personsSlice';
import { deleteRegistered } from '../../../../../features/allRegistered';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

const DeleteItem = (idCenso) => {
    const dispatch = useDispatch();

    const deletePersonById = () => {
        fetch(endpoints.base_url + endpoints.delete_person + idCenso.idCenso, {
            method: 'DELETE',
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
        <div className="awesomeIcon" onClick={deletePersonById} >
            <FontAwesomeIcon icon={faUserMinus} size="lg" />
        </div>

    )
}

export default DeleteItem;