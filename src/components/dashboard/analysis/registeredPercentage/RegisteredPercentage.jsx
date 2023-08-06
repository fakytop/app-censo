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

  return (
    <div className="card" style={{height: '215px'}}>
      <div className="card-header"><h3>% Censados</h3></div>
      <div className="card-body">
        <h1 className="card-title">{percentage}%</h1>
        <h6>Total registrados: {allRegistered}</h6>
      </div>
    </div>
  )
}

export default RegisteredPercentage