import React from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../constants';

function Showcase(props) {

    return (
        <section className="showcase">
            <div className="container grid">
                <div className="showcase-text">
                    <h1>Effortless Deployment</h1>
                    <p>{constants.texts.homeShowcaseText}</p>
                    <Link to='/features' className="btn btn-outline">Read More</Link>
                </div>
                <div className="showcase-form card">
                    <h2>Request a Demo</h2>
                    <form name="contact" method="POST" netlify netlify-honeypot="bot-field" data-netlify="true">
                        <p class="hidden">
                            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="form-control">
                            <input type="text" name="name" placeholder="Name" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name="company" placeholder="Company Name" required />
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <input type="submit" value="Send" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Showcase;