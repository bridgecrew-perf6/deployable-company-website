import React from 'react';
import cliImage from "../../assets/images/cli.png";

function Cli(props) {
    return (
        <section className="cli">
            <div className="container grid">
                <img src={cliImage} alt="CLI image" />
                <div className="card">
                    <h3>Easy to use CLI</h3>
                </div>
                <div className="card">
                    <h3>Deploy in a heartbeat</h3>
                </div>
            </div>
        </section>
    );
}

export default Cli;