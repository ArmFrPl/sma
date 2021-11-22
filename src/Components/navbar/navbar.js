import React from "react"
import { Link } from "react-router-dom"
import routes from './fakeData'
import "./navbar.css"

const Navbar = () => {
    return <div className='navbar-container'>
        <div>
            <div className='navbar-container__logo'>
                LOGO
            </div>
            <div className='navbar-container__'>
                <div>
                    {routes.map((item) => {
                        return <div key={item.id}>
                            <div>
                                <Link to={item.route}>
                                    {item.name}
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
}

export default Navbar