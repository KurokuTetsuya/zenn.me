import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./nav.style.css";

export class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md bg-dark">
                <a className="navbar-brand" href="/"><a href="/"><img className="icon" src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" width="30px" height="30px"></img></a></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/activity">Activity</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}