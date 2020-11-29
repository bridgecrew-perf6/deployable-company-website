import React from 'react';
import { Link } from 'react-router-dom';
import cloudImage from "../../assets/images/cloud.png";


function Cloud(props) {
    return (
        <section className="cloud bg-primary my-2 py-2">
            <div className="container grid">
                <div className="text-center">
                    <h2 className="lg">Out of the box cloud integration</h2>
                    <p className="lead my-1">Deploy your apps to Google App Engine in a fast, efficient and easy way.</p>
                    <Link to='/features' className="btn btn-dark">Read More</Link>
                </div>
                <img src={cloudImage} alt="Cloud technology" />
            </div>
        </section>
    );
}

export default Cloud;