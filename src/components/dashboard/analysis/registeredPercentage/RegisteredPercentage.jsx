import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const RegisteredPercentage = () => {
  const allRegistered = useSelector(state => state.allRegistered.allRegistered)
  const people = useSelector(state => state.persons.people);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const data = people.length / allRegistered * 100
    setPercentage(data.toFixed(2));
  }, [allRegistered, people])

  console.log(percentage)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-subtitle mb-2 text-body-secondary">% Censados</h5>
        <h2 className="card-title">{percentage}%</h2>
        <p>Total registrados: {allRegistered}</p>
      </div>
    </div>
  )
}

export default RegisteredPercentage