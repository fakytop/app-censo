import React from 'react'

const TimeLeft = () => {
    const lastDay = new Date(2023, 7, 31);
    const today = new Date();
    const daysLeft = parseInt((lastDay - today) / 1000 / 60 / 60 / 24) + 1;
    return (
        <div >
            {
                daysLeft > 20 &&
                <div className="alert alert-success parrafo" role="alert" >
                    <b>
                        Faltan {daysLeft} días para terminar el censo 2023.
                    </b>
                </div>
            }
            {
                daysLeft <= 20 && daysLeft > 1 &&
                <div className="alert alert-warning parrafo" role="alert">
                    <b>
                        Faltan {daysLeft} días para terminar el censo 2023.
                    </b>
                </div>
            }
            {
                daysLeft === 1 &&
                <div className="alert alert-danger parrafo" role="alert">
                    <b>
                        Hoy es el último día para realizar censos.
                    </b>
                </div>
            }
            {
                daysLeft < 1 &&
                <div className="alert alert-secondary parrafo" role="alert">
                    <b>
                        Los censos ya fueron cerrados.
                    </b>
                </div>
            }
        </div>
    )
}

export default TimeLeft;