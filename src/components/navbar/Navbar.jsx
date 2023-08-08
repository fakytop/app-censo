import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { clearPeople } from "../../features/personsSlice";
import { clearAllRegistered } from "../../features/allRegistered";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const dispatch = useDispatch();
    const Logout = () => {
        localStorage.clear();
        dispatch(clearPeople());
        dispatch(clearAllRegistered());
    }

    const [enableButton, setEnableButton] = useState("none");
    const location = useLocation();

    useEffect(() => {
        const showButton = location.pathname !== '/' && location.pathname !== '/signup';
        setEnableButton(showButton ? "block" : "none")
    }, [location])

    return (
        <div>
            <nav className="row">
                <div className="col-1">
                    <NavLink to="/">
                        <img src="./img/censo.png" alt="" style={{ height: '56px' }} />
                    </NavLink>
                </div>
                <div className="col-10">
                </div>
                <div className="col-1" style={{ display: enableButton }}>
                    <NavLink to="/" onClick={Logout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} size="2xl"/>
                    </NavLink>
                </div>
            </nav>
            <main >
                <Outlet />
            </main>
        </div>
    )
}
export default Navbar