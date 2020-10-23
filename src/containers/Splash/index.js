import React from "react";
import { NavLink } from "react-router-dom";

class Splash extends React.Component {
    render() {
        return (
            <div className="splashWrapper">
                <div className="splashContent">
                    <h2>At Patchwork, We Take Making Friends Quite Literally!</h2>
                    <p>Eldritch monsters have invaded the world and it's up to you to sew together an army of creatures to stop them!</p>
                    <p>Patchwork is a cross between a virtual pet site, Frankenstein, and cosmic horror. Create an account, create a patch, explore, and save the world.</p>
                    <br />
                    <hr />
                    <br />
                    <h2>Patchwork Is Still Under Construction But You Can Still Play!</h2>
                    <p>While we're stitching the project together, you can stitch together some possible Patches and see what others have created.</p>
                    <p>Navigate over to the <NavLink to="/create">Create Page</NavLink> to create your own Patch.</p>
                    <p>Or you can see all the Patches others have created on the <NavLink to="/view">View Page</NavLink>.</p>
                    <br />
                    <hr />
                    <br />
                    <h2>Updates</h2>
                    <p><b>10/22 - </b>Preparing the most basic version of patchwork for Heroku deploy!</p>
                </div>
            </div>
        )
    }
}

export default Splash;