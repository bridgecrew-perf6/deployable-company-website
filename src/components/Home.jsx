import React from 'react';
import Cli from './home/Cli';
import Showcase from './home/Showcase';
import Stats from './home/Stats';

function Home(props) {
    return (
        <div>
            <Showcase />
            <Stats />
            <Cli />
        </div>

    );
}

export default Home;