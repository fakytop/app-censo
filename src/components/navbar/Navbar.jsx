import { NavLink, Outlet } from "react-router-dom"

const Navbar = () => {
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
                    <div className="col-1">
                        <NavLink to="/">Cerrar Sesión</NavLink>

                    </div>

                </nav>
            <main >

                <Outlet />

            </main>
        </div>
    )
}

export default Navbar