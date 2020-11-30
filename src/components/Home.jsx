import React from 'react';
import Footer from './Footer';
import Cli from './home/Cli';
import Cloud from './home/Cloud';
import Languages from './home/Languages';
import Showcase from './home/Showcase';
import Stats from './home/Stats';

function Home(props) {
    return (
        <div>
            <Showcase />
            <Stats />
            <Cli />
            <Cloud />
            <Languages />
            <Footer />
        </div>

    );
}

export default Home;