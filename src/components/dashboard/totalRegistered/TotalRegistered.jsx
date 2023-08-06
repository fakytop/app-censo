import { useSelector } from "react-redux";

const TotalRegistered = () => {

  const people = useSelector(state => state.persons.people);
  const peopleMvdeo = people.filter(p => p.departamento === 3218);

  return (
    <div className="card" style={{height:'180px'}}>
      <div className="card-header">Total censadas</div>
      <div className="card-body">
        <h1 className="card-title">{people.length}</h1>
        <div className="row">
          <div className="col-6">
            <h6 className="card-subtitle mb-2 text-body-secondary">Mvd.</h6>
            <h5 className="card-title">{peopleMvdeo.length}</h5>
          </div>
          <div className="col-6">
            <h6 className="card-subtitle mb-2 text-body-secondary">Resto</h6>
            <h5 className="card-title">{people.length - peopleMvdeo.length}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalRegistered;