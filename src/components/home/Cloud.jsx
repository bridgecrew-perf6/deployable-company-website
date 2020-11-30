import React from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../constants';
import cloudImage from "../../assets/images/cloud.png";

function Cloud(props) {
    return (
        <section className="cloud bg-primary my-2 py-2">
            <div className="container grid">
                <div className="text-center">
                    <h2 className="lg">{constants.texts.homeCloudHeadline}</h2>
                    <p className="lead my-1">{constants.texts.homeCloudText}</p>
                    <Link to='/features' className="btn btn-dark">Read More</Link>
                </div>
                <img src={cloudImage} alt="Cloud technology" />
            </div>
        </section>
    );
}

export default Cloud;