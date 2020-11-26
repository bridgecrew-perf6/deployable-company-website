import React from 'react';
import Showcase from './home/Showcase';
import Stats from './home/Stats';

function Home(props) {
    return (
        <div>
            <Showcase />
            <Stats />
        </div>
    );
}

export default Home;