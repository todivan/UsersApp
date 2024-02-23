import React from 'react';

const UserDetailsRow = ({label, value}) => {
    return(
        <div className="row">
            <div className="col-2 text-end"><b>{label}: </b></div>
            <div className="col-6 text-start">{value}</div>
        </div>
    );
};

export default UserDetailsRow;