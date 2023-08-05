import AddPerson from "./addPerson/AddPerson";
import ListPeople from "./listPeople/ListPeople";
import TotalRegistered from "./totalRegistered/TotalRegistered";
import endpoints from "../../services/config";
import { useDispatch } from "react-redux";
import { saveRegisteredById } from "../../features/personsSlice";
import { saveOccupations } from "../../features/occupationsSlice";
import { saveDptos } from "../../features/deptosSlice";



//TODO: Componente Análisis con todas las gráficas
    //TODO: Gráfico de personas x depto. (no se muestran deptos sin datos.)
    //TODO: Gráfico de personas x ocupación.
    //TODO: Mapa con censados x dpto.
    //TODO: % de personas censadas respecto del total.
    //TODO: Tiempo restante en días para finalizar el censo (31/08/2023)


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
    }

    fetchData();


    return (
        <>
            <AddPerson />
            <ListPeople />
            <TotalRegistered/>
        </>
    )
}

export default Dashboard;