import React from 'react';
import { connect } from "react-redux";

import SmurfCard from "./SmurfCard";

const SmurfList = props => {
    return (
        <div className="smurf-list">
            {props.smurfs.map(smurf => (
                <SmurfCard smurf={smurf} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect( mapStateToProps, {})(SmurfList);