import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './background.scss';
import SuperContainer from '../SuperContainer/superContainer';

class Background extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className='background'>
                    <div className='top'></div>
                    <div className='bottom'></div>
                    <SuperContainer/>
                </div>
            </Router>
        );
    }
}

export default Background;
