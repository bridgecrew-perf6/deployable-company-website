import React from 'react';
import Cli from './home/Cli';
import Cloud from './home/Cloud';
import Showcase from './home/Showcase';
import Stats from './home/Stats';

function Home(props) {
    return (
        <div>
            <Showcase />
            <Stats />
            <Cli />
            <Cloud />
        </div>

    );
}

export default Home;