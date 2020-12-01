import React from 'react';
import { constants } from '../../constants';
import docsImage from '../../assets/images/docs.png';

function Head(props) {
    return (
        <section className="docs-head bg-primary py-3">
            <div className="container grid">
                <div>
                    <h1 className="xl">Docs</h1>
                    <p className="lead">{constants.texts.docsHeadText}</p>
                </div>
                <img src={docsImage} alt="server" />
            </div>
        </section>
    );
}

export default Head;