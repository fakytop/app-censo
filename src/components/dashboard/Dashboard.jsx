import AddPerson from "./addPerson/AddPerson";
import ListPeople from "./listPeople/ListPeople";
import TotalRegistered from "./totalRegistered/TotalRegistered";
import endpoints from "../../services/config";
import { useDispatch } from "react-redux";
import { saveRegisteredById } from "../../features/personsSlice";
import { saveOccupations } from "../../features/occupationsSlice";
import { saveDptos } from "../../features/deptosSlice";
import { saveAllRegistered } from "../../features/allRegistered";
import Analysis from "./analysis/Analysis";
import RegisteredPercentage from "./analysis/registeredPercentage/RegisteredPercentage";

const Dashboard = () => {
    const dispatch = useDispatch()

    const fetchData = async () => {
        //Obtengo los departamentos y guardo en slice
        await fetch(endpoints.base_url + endpoints.get_depts, {
            headers: {
                'Content-Type': 'application/json',
                'apikey': localStorage.getItem('apiKey'),
                'iduser': localStorage.getItem('idUsuario')
            }
        })
            .then(r => r.json())
            .then(rjson => {
                dispatch(saveDptos(rjson.departamentos));
            });
        //Obtengo las ocupaciones y guardo en slice
        await fetch(endpoints.base_url + endpoints.get_occupations, {
            headers: {
                'Content-Type': 'application/json',
                'apikey': localStorage.getItem('apiKey'),
                'iduser': localStorage.getItem('idUsuario')
            }
        })
            .then(r => r.json())
            .then(rjson => {
                dispatch(saveOccupations(rjson.ocupaciones));
            })
        //Obtengo las los usuarios y guardo en slice                     
        await fetch(endpoints.base_url + endpoints.get_registered_id + localStorage.getItem('idUsuario'), {
            headers: {
                'Content-Type': 'application/json',
                'apikey': localStorage.getItem('apiKey'),
                'iduser': localStorage.getItem('idUsuario')
            }
        })
            .then(r => r.json())
            .then(rjson => {
                dispatch(saveRegisteredById(rjson.personas));
            })

        await fetch(endpoints.base_url + endpoints.get_all_registered, {
            headers: {
                'Content-Type': 'application/json',
                'apikey': localStorage.getItem('apiKey'),
                'iduser': localStorage.getItem('idUsuario')
            }
        }).then(r => r.json())
            .then(rjson => {
                dispatch(saveAllRegistered(rjson.total));
            })
    }

    fetchData();

    return (
        <div className="container">
            <div className="row">
                <AddPerson />
                <ListPeople />

                <div className="col-2">
                    <TotalRegistered />
                    <RegisteredPercentage />
                </div>
                <Analysis />
            </div>
        </div>
    )
}

export default Dashboard;