import React from 'react'

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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const GraphicsBar = ({options,data,color,label}) => {

    return (


            <Bar options={options} data={{
                labels: data.map(dpto => dpto.nombreGraph),
                datasets: [
                    {
                        label: label,
                        data: data.map(dpto => dpto.qant),
                        backgroundColor: color,
                    }
                ],
            }} />


    )
}

export default GraphicsBar