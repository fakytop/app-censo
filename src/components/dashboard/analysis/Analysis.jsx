import React from 'react'
// import PersonsPerDpto from './personsPerDpto/PersonsPerDpto'
import GraphicsBar from './graphicsBar/GraphicsBar'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const Analysis = () => {
    const people = useSelector(state => state.persons.people);
    const deptos = useSelector(state => state.deptos.deptos);

    const [dataPersonsPerDpto, seDataPersonsPerDpto] = useState([]);


    useEffect(() => {
        const newData = deptos.map(dpto => {
            const qantPerDepto = people.filter(person => dpto.id === person.departamento).length;
            return {
                idGraph: dpto.id,
                nombreGraph: dpto.nombre,
                qant: qantPerDepto
            }
        }).filter(item => item.qant !== 0);
        seDataPersonsPerDpto(newData)
    }, [deptos, people]);

    const optionsPersonsPerDpto = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };
  return (
    <div>

        <GraphicsBar options={optionsPersonsPerDpto} data={dataPersonsPerDpto} color={'rgba(12, 200, 99, 0.5)'}/>
    </div>
  )
}

export default Analysis