import React from 'react';
import ReactDOM from 'react-dom';
import './superContainer.scss'
import avatar from '../../../avatar.png';

class SuperContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className='superContainer'>
                <div className='leftPart'>
                    <div className='header'></div>
                    <div className='searchWrapper'>
                        <div className='searchBox'></div>
                    </div>
                    <div className='contactsWrapper'>
                        <div className='contacts'>
                            <div className='contact'>
                                <div className='contactLeft'>
                                    <img src = {avatar} />
                                </div>
                                <div className='contactRight'>
                                    <div className='upper'>
                                        <div className='name'>Gaurav Sharma</div>
                                        <div className='time'>14:30</div>
                                    </div>
                                    <div className='lower'>Hi !</div>
                                </div>
                            </div>
                            <div className='contact'>
                                <div className='contactLeft'>
                                    <img src = {avatar} />
                                </div>
                                <div className='contactRight'>
                                    <div className='upper'>
                                        <div className='name'>Saurabh Sharma</div>
                                        <div className='time'>13:30</div>
                                    </div>
                                    <div className='lower'>Hey !</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightPart'>
                    <div className='header'></div>
                </div>
            </div>
        );
    }
}

export default SuperContainer;