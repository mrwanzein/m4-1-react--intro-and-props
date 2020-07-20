import React from 'react';

import './ChatMessage.css';

const chatMessage = ({message}) => {
    return (
        <div className='chat-message'>
            <img src={message.user.avatar} alt="User profile pic"/>
            <div>
                <ul className="chat-ul">
                    <li className="username">{message.user.username}</li>
                    <li className="chat-box">{message.body}</li>
                </ul>
            </div>
        </div>
    );
}

export default chatMessage;