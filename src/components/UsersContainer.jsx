import React from 'react';
import UserList from './UserList.jsx';

const UsersContainer = (props) => (
    <div className="people-list" id="people-list">
        <div className="search">
            <input type="text" placeholder="search" />
            <i className="fa fa-search"></i>
        </div>
        <UserList />
    </div>
    );

    export default UsersContainer;