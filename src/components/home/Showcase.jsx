import React from 'react';
import { Link } from 'react-router-dom';

function Showcase(props) {
    return (
        <section className="showcase">
            <div className="container grid">
                <div className="showcase-text">
                    <h1>Effortless Deployment</h1>
                    <p>Deploy JS apps to GCP with ease.
                    from large scale enterprise APIs to static websites
                    for individuals. Fill out the form to try a demo of our platform.
                    </p>
                    <Link to='/features' className="btn btn-outline">Read More</Link>
                </div>
                <div className="showcase-form card">
                    <h2>Request a Demo</h2>
                    <form>
                        <div className="form-control">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Showcase;