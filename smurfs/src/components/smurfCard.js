import React, { useState } from 'react';
import { connect } from "react-redux";

import { deleteSmurf } from "../actions/smurfActions";

import SmurfEdit from "./SmurfEdit";

const SmurfCard = props => {
    const [ editing, setEditing ] = useState(false);
    const handleDeleteSmurf = e => {
        e.preventDefault();
        props.deleteSmurf(props.smurf);
    };
    const toggleEdit = () => {
        setEditing(!editing);
    }
    return (
        <div className="smurf-card">
            <h2>{props.smurf.name}</h2>
            <p>Age:{` ${props.smurf.age}`}</p>
            <p>Height:{` ${props.smurf.height}`}</p>
            <button onClick={handleDeleteSmurf}>Delete</button>
            {editing ? (
                <SmurfEdit smurf={props.smurf} cancelEdit={toggleEdit} />
            ) : (
                <button onClick={toggleEdit}>Edit</button>
            ) }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
};

export default connect( mapStateToProps, { deleteSmurf })(SmurfCard);