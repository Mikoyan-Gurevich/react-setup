import React from 'react';
import {Link, Route} from 'react-router-dom';
import './superContainer.scss'
import avatar from '../../../avatar.png';

const contactsMockData = [
    {
        id: 1,
        name: 'Gaurav Sharma',
        time: '14:30',
        message: 'Hi !'
    },
    {
        id: 2,
        name: 'Saurabh Sharma',
        time: '13:30',
        message: 'Hey !'
    }
];

class SuperContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    getContactCard(obj) {
        return (
            <div className='contact'>
                <div className='contactLeft'>
                    <img src={avatar}/>
                </div>
                <div className='contactRight'>
                    <div className='upper'>
                        <div className='name'>{obj.name}</div>
                        <div className='time'>{obj.time}</div>
                    </div>
                    <div className='lower'>{obj.message}</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='superContainer'>
                <div className='leftPart'>
                    <div className='header'>Watch out this space for header</div>
                    <div className='searchWrapper'>
                        <div className='searchBox'>Watch out this space for search box</div>
                    </div>
                    <div className='contactsWrapper'>
                        <div className='contacts'>
                            {contactsMockData.map((contact, key) => {
                                return (
                                    <Link key={key} to={`/build/${contact.id}`}>
                                        {this.getContactCard(contact)}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='rightPart'>
                    <div className='header'>Watch out this space for header</div>
                    <Route path='/build/:contactId' render={((match) =>
                        <div>{JSON.stringify(contactsMockData[match.match.params.contactId - 1])}</div>)}/>
                </div>
            </div>
        );
    }
}

export default SuperContainer;