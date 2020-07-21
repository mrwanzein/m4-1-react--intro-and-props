import React from 'react';

import ParticipantList from '../ParticipantList';

import './Header.css';

const Header = (props) => {
  return <header>{<ParticipantList listOfUsers={props.listOfUsers} currentUser={props.currentUser}/>}</header>;
};

export default Header;
