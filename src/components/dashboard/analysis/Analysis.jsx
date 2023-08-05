import React from 'react'
// import PersonsPerDpto from './personsPerDpto/PersonsPerDpto'
import GraphicsBar from './graphicsBar/GraphicsBar'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Map from './map/Map';
import RegisteredPercentage from './registeredPercentage/RegisteredPercentage';
import TimeLeft from './timeLeft/TimeLeft';
const Analysis = () => {
    const people = useSelector(state => state.persons.people);
    const deptos = useSelector(state => state.deptos.deptos);
    const occupations = useSelector(state => state.occupations.occupations);


    const [dataPersonsPerDpto, setDataPersonsPerDpto] = useState([]);
    const [dataPersonsByOccupations, setDataPersonsByOccupations] = useState([]);

    useEffect(() => {
        const newData = deptos.map(dpto => {
            const qantPerDepto = people.filter(person => dpto.id === person.departamento).length;
            return {
                idGraph: dpto.id,
                nombreGraph: dpto.nombre,
                qant: qantPerDepto,
                latitud: dpto.latitud,
                longitud: dpto.longitud
            }
        }).filter(item => item.qant !== 0);
        setDataPersonsPerDpto(newData)
    }, [deptos, people]);


    useEffect(() => {
        const newData = occupations.map(occ => {
            const qantByOccupation = people.filter(person => occ.id === person.ocupacion).length;
            return {
                idGraph: occ.id,
                nombreGraph: occ.ocupacion,
                qant: qantByOccupation,
            }
        })
        console.log(newData);
        setDataPersonsByOccupations(newData);
    }, [people, occupations])

    const optionsPersonsPerDpto = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Personas por Departamento',
            },
        },
    };
    const optionsPersonsByOccupation = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Personas por Ocupación',
            },
        },
    };
    return (
        <div>
            <TimeLeft />
            <div className="row">
                <div className='col-4'>
                    <GraphicsBar options={optionsPersonsPerDpto} data={dataPersonsPerDpto} color={'rgba(12, 200, 99, 0.5)'} label={'Cantidad de personas censadas por departamento'} />

                </div>
                <div className='col-5'>
                    <GraphicsBar options={optionsPersonsByOccupation} data={dataPersonsByOccupations} color={'rgba(200, 200, 99, 0.5)'} label={'Cantidad de personas censadas por ocupación'} />

                </div>
                <div className='col-3'>
                    <Map data={dataPersonsPerDpto} />

                </div>

            </div>

        </div>
    )
}

export default Analysis