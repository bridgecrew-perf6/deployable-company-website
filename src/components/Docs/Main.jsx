import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { constants } from "../../constants";

function Main(props) {
    return (
        <section className="docs-main my-4">
            <div className="container grid">
                <div className="card bg-light p-3">
                    <h3 className="my-2">Essentials</h3>
                    <nav>
                        <ul>
                            <Link className="docs-link">
                                <li>Introduction</li>
                            </Link>
                            <Link className="docs-link">
                                <li>About Deployable</li>
                            </Link>
                            <Link className="docs-link">
                                <li>Installation</li>
                            </Link>
                        </ul>
                    </nav>
                    <h3 className="my-2">Deployment</h3>
                    <nav>
                        <ul>
                            <Link className="docs-link">
                                <li>Setting up a container</li>
                            </Link>
                            <Link className="docs-link">
                                <li>Using the CLI</li>
                            </Link>
                            <Link className="docs-link">
                                <li>Managing resources</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="card">
                    <h2>Introduction</h2>
                    <p>{constants.texts.docsMainIntroText1}</p>
                    <div className="alert alert-success">
                        <FontAwesomeIcon className="fas i" icon={faInfo} /><span>{constants.texts.docsMainAlertText}</span>
                    </div>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>{constants.texts.docsMainIntroText2}</p>
                    <Link className="btn btn-primary">Install CLI</Link>
                    <h3>Requirements</h3>
                    <ul>
                        <li>Windows 10, Mac OSX, Linux</li>
                        <li>Node.js v11 or higher</li>
                    </ul>
                    <h3>Install</h3>
                    <p>Mac (Homebrew)</p>
                    <pre><code>$ brew install deployable-cli</code></pre>
                    <p>NPM</p>
                    <pre><code>$ npm i deployable-cli</code></pre>
                    <p>Yarn</p>
                    <pre><code>$ yarn add deployable-cli</code></pre>
                </div>
            </div>
        </section>
    );
}

export default Main;