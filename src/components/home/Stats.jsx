import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faUpload, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'


function Stats(props) {
    return (
        <section className="stats">
            <div className="container">
                <h3 className="stats-heading text-center my-1">
                    Meet the best platform for deploying apps to Google Cloud
                </h3>

                <div className="grid grid-3 text-center my-4">
                    <div>
                        <FontAwesomeIcon className="fas" icon={faServer} size="3x" />
                        <h3>5,678</h3>
                        <p className="text-secondary">Deployments</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="fas" icon={faUpload} size="3x" />
                        <h3>129 TB</h3>
                        <p className="text-secondary">Published</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="fas" icon={faProjectDiagram} size="3x" />
                        <h3>2,124</h3>
                        <p className="text-secondary">Projects</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;