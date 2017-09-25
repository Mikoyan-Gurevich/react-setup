import React from 'react';
import './background.scss';
import SuperContainer from '../SuperContainer/superContainer';

class Background extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return  (
            <div className= 'background'>
                <div className='top'></div>
                <div className='bottom'></div>
                <SuperContainer />
            </div>
        );
    }
}

export default Background;