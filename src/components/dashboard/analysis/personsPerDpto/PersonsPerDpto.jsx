import React, { useEffect, useState } from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
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


const PersonsPerDpto = () => {

    const people = useSelector(state => state.persons.people);
    const deptos = useSelector(state => state.deptos.deptos);

    const [data, setData] = useState([]);


    useEffect(() => {
        const newData = deptos.map(dpto => {
            const qantPerDepto = people.filter(person => dpto.id === person.departamento).length;
            return {
                idDpto: dpto.id,
                nombreDpto: dpto.nombre,
                qant: qantPerDepto
            }
        }).filter(item => item.qant !== 0);
        setData(newData)
    }, [deptos, people]);

    console.log(data);



    return (

        <>
            <div>Analysis</div>
            <Bar options={options} data={{
                labels: data.map(dpto => dpto.nombreDpto),
                datasets: [
                    {
                        label: 'Cantidad de personas censadas',
                        data: data.map(dpto => dpto.qant),
                        backgroundColor: 'rgba(12, 200, 99, 0.5)',
                    }
                ],
            }} />

        </>
    )
}

export default PersonsPerDpto