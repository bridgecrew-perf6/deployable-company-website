import React from 'react';
import { constants } from '../../constants';
import serverImage2 from '../../assets/images/server2.png';

function SubHead(props) {
    return (
        <section className="features-sub-head bg-light py-3">
            <div className="container grid">
                <div>
                    <h1 className="md">Deployable Platform</h1>
                    <p>{constants.texts.featuresSubHeadText}</p>
                </div>
                <img src={serverImage2} alt="server" />
            </div>
        </section>
    );
}

export default SubHead;