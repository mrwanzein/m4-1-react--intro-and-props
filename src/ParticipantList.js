import React from 'react';

import './ParticipantList.css';

const ParticipantList = (props) => {
    return(
        <div className="participant-container">
            {props.listOfUsers.map(users => {
                if(props.currentUser.username !== users.username) {
                    return (
                        <div key={users.username}>
                            <ul>
                                <li><img className="profile-pic" src={users.avatar} alt="User Profile"/></li>
                                <li>{users.username}</li>
                            </ul>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    )
};

export default ParticipantList;