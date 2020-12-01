import React from 'react';
import { constants } from '../../constants';
import serverImage from '../../assets/images/server.png';

function Head(props) {
    return (
        <section className="features-head bg-primary py-3">
            <div className="container grid">
                <div>
                    <h1 className="xl">Features</h1>
                    <p className="lead">{constants.texts.featuresHeadText}</p>
                </div>
                <img src={serverImage} alt="server" />
            </div>
        </section>
    );
}

export default Head;