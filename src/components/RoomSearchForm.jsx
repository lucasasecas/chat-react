import React from 'react';

const RoomSeachForm = (props) => (<div className="search">
    <input type="text" placeholder="search" onChange={props.onChangeHandler} />
    <i className="fa fa-search"></i>
</div>);

export default RoomSeachForm;