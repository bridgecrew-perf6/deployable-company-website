import React from 'react';
import Head from './Features/Head';
import Main from './Features/Main';
import SubHead from './Features/SubHead';

function Features(props) {
    return (
        <div>
            <Head />
            <SubHead />
            <Main />
        </div>
    );
}

export default Features;