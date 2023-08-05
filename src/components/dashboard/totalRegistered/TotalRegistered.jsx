import { useSelector } from "react-redux";

const TotalRegistered = () => {

  const people = useSelector(state => state.persons.people);
  console.log(people);
  const peopleMvdeo = people.filter(p => p.departamento === 3218);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-subtitle mb-2 text-body-secondary">Total censadas</h5>
        <h2 className="card-title">{people.length}</h2>
        <div className="row">
          <div className="col-6">
            <h5 className="card-subtitle mb-2 text-body-secondary">Mvd.</h5>
            <h3 className="card-title">{peopleMvdeo.length}</h3>

          </div>
          <div className="col-6">
            <h5 className="card-subtitle mb-2 text-body-secondary">Resto</h5>
            <h3 className="card-title">{people.length - peopleMvdeo.length}</h3>

          </div>

        </div>
      </div>
    </div>
  );
}

export default TotalRegistered;