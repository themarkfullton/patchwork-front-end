import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navWrapper">
                <div className="navContent">
                    <div className="navLeftCol">
                        <NavLink to="" className="navLogo">
                        Patchwork
                        </NavLink>
                    </div>
                    <div className="navRightCol">
                        <NavLink to="" className="navItem">
                        Create a Patch
                        </NavLink>
                        <NavLink to="" className="navItem">
                        See All Patches
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;