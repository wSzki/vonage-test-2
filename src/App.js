import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

import Publish from './Publish'
import Subscribe from './Subscribe'

function App() {
	// Handling all of our errors here by alerting them
    return (
        <div className='App'>
            <Publish />
            <Subscribe />
        </div>
    );
}

export default App;
