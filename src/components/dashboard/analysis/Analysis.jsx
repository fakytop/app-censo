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
        <div className="container">
            <div className="row">
                <TimeLeft/>
                <div className="col-6 ">
                    <div className="card border-danger">
                        <div class="card-header">Cant. Personas por Departamento</div>
                        <div className="card-body">
                            <GraphicsBar options={optionsPersonsPerDpto} data={dataPersonsPerDpto} color={'rgba(240, 91, 121, 0.8)'} label={'Cantidad de personas censadas por departamento'} />
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="card border-warning">
                        <div class="card-header">Cant. Personas por Ocupación</div>
                        <div className="card-body">
                            <GraphicsBar options={optionsPersonsByOccupation} data={dataPersonsByOccupations} color={'rgba(243, 203, 58, 0.8)'} label={'Cantidad de personas censadas por ocupación'} />
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card border-primary">
                        <div className="card-header">Mapa de Uruguay</div>
                        <div className="card-body mod-padding">
                            <Map data={dataPersonsPerDpto} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Analysis;