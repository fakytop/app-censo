import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom"

const Navbar = () => {
    const Logout = () => {
        localStorage.clear();
    }

    const [enableButton, setEnableButton] = useState("none");
    const location = useLocation();

    useEffect(() => {
        const showButton = location.pathname !== '/'
        console.log(location);
        setEnableButton(showButton ? "block" : "none")
    }, [location])

    return (
        <div className="container">
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
                        <img src="./img/logout.jpg" alt="" style={{ height: '56px' }} />
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