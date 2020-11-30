import React from 'react';
import nodeImage from "../../assets/logos/node.png";
import goImage from "../../assets/logos/go.png";
import phpImage from "../../assets/logos/php.png";

function Languages(props) {
    return (
        <section className="languages">
            <h2 className="md text-center my-2">
                Supported Languages
            </h2>
            <div className="container flex">
                <div className="card">
                    <h4>Node.js</h4>
                    <img src={nodeImage} alt="node js" />
                </div>
                <div className="card">
                    <h4>Go</h4>
                    <img src={goImage} alt="node js" />
                </div>
                <div className="card">
                    <h4>PHP</h4>
                    <img src={phpImage} alt="node js" />
                </div>
            </div>

        </section>
    );
}

export default Languages;