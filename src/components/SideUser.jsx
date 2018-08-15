import React from 'react';

const SideUser = (props) => {
    return (
    <li className="clearfix">
        <img src={props.avatarUrl} alt="avatar" />
        <div className="about">
            <div className="name">{props.name}</div>
            <div className="status">
            <i className={"fa fa-circle " + props.status}></i> {props.status}
            </div>
        </div>
    </li>);
} ;

export default SideUser;

