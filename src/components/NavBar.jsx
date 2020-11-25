import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div className="navbar">
            <div className="container flex">
                <h1 className="logo">Deployable</h1>
                <nav>
                    <ul>
                        <Link className="navbar-link" to="/">
                            <li>Home</li>
                        </Link>
                        <Link className="navbar-link" to="/features">
                            <li>Features</li>
                        </Link>
                        <Link className="navbar-link" to="/docs">
                            <li>Docs</li>
                        </Link>
                    </ul>
                </nav>
            </div>

        </div>
    );
}

export default NavBar;