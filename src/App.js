import React, { Component } from 'react';
import { loadimages } from './components/actions';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

const App = () => {
    return (
        <div>
            <Header />
            <ImageGrid />
        </div>
    );
};

export default App;
