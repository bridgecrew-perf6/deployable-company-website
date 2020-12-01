import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faCodeBranch, faLaptopCode, faPowerOff, faNetworkWired, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { constants } from "../../constants";

function Main(props) {
    return (
        <section className="features-main my-2">
            <div className="container grid grid-3">
                <div className="card flex">
                    <FontAwesomeIcon className="fas" icon={faServer} size="3x" />
                    <p>{constants.texts.featuresMainText3}</p>
                </div>
                <div className="card flex">
                    <FontAwesomeIcon className="fas" icon={faLaptopCode} size="3x" />
                    <p>{constants.texts.featuresMainText2}</p>
                </div>
                <div className="card flex">
                    <FontAwesomeIcon className="fas" icon={faPowerOff} size="3x" />
                    <p>{constants.texts.featuresMainText1}</p>
                </div>
                <div className="card flex">
                    <FontAwesomeIcon className="fas" icon={faNetworkWired} size="3x" />
                    <p>{constants.texts.featuresMainText1}</p>
                </div>
                <div className="card flex">
                    <FontAwesomeIcon className="fas" icon={faFileUpload} size="3x" />
                    <p>{constants.texts.featuresMainText1}</p>
                </div>
                <div className="card flex">
                    <FontAwesomeIcon className="fas" icon={faCodeBranch} size="3x" />
                    <p>{constants.texts.featuresMainText1}</p>
                </div>
            </div>
        </section>
    );
}

export default Main;