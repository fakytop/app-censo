import { useSelector } from "react-redux";

const TotalRegistered = () => {

  const people = useSelector(state => state.persons.people);
  console.log(people);
  const peopleMvdeo = people.filter(p => p.departamento === 3218);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h4 className="card-subtitle mb-2 text-body-secondary">Total de personas censadas</h4>
        <h2 className="card-title">{people.length}</h2>
        <h5 className="card-subtitle mb-2 text-body-secondary">Total en Montevideo</h5>
        <h3 className="card-title">{peopleMvdeo.length}</h3>
      </div>
    </div>
  );
}

export default TotalRegistered;