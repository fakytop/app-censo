import React from 'react'

const TimeLeft = () => {
    const lastDay = new Date(2023, 7, 31);
    const today = new Date();
    const daysLeft = parseInt((lastDay - today) / 1000 / 60 / 60 / 24)+1;
    console.log(daysLeft);


    return (
        <div>
            {
                daysLeft > 20 &&
                <div class="alert alert-success" role="alert">
                    Faltan {daysLeft} para terminar el censo 2023.
                </div>
            }
            {
                daysLeft <= 20 && daysLeft > 1 &&
                <div class="alert alert-warning" role="alert">
                    Faltan {daysLeft} para terminar el censo 2023.
                </div>
            }
            {
                daysLeft === 1 &&
                <div class="alert alert-danger" role="alert">
                    Hoy es el último día para realizar censos.
                </div>
            }
            {
                daysLeft < 1 &&
                <div class="alert alert-secondary" role="alert">
                    Los censos ya fueron cerrados.
                </div>
            }
        </div>

    )
}

export default TimeLeft