import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { getSmurfs } from "../actions/smurfActions";

const Heading = props => {
    useEffect(() => {
        props.getSmurfs();
    },[]);
    const handleGetSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    }
    return (
        <div className="smurf-header">
            <h1>Get Smurfed!</h1>
            {props.status === "fetching" && (
                <div>Getting Smurfs</div>
            )}
            {props.status === "updating" && (
                <div>Updating Smurfs</div>
            )}
            {props.status === "error" && (
                <div className="error">
                    {props.error}
                </div>
            )}
            <button onClick={handleGetSmurfs}>Get Smurfs</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        status: state.status,
        error: state.error
    }
}

export default connect( mapStateToProps, { getSmurfs })(Heading);