import React from 'react';
import { connect } from "react-redux";

import { deleteSmurf } from "../actions/smurfActions";

const SmurfCard = props => {
    const handleDeleteSmurf = e => {
        e.preventDefault();
        props.deleteSmurf(props.smurf.id);
    };
    return (
        <div className="smurf-card">
            <h2>{props.smurf.name}</h2>
            <p>Height:{` ${props.smurf.height}`}</p>
            <p>Age:{` ${props.smurf.age}`}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
};

export default connect( mapStateToProps, { deleteSmurf })(SmurfCard);