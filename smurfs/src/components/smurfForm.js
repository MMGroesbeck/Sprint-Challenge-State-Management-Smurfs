import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions/smurfActions";

const SmurfForm = props => {
    const [newName, setNewName] = useState("Name")
    const [newAge, setNewAge] = useState("Age in Years");
    const [newHeight, setNewHeight] = useState("Height");

    const handleName = e => {
        setNewName(e.target.value);
    }
    const handleAge = e => {
        setNewAge(e.target.value);
    }
    const handleHeight = e => {
        setNewHeight(e.target.value);
    }

    const handleAddSmurf = e => {
        e.preventDefault();
        props.addSmurf({
            name: newName,
            age: newAge,
            height: newHeight,
            id: Date.now()
        })
    }

    return (
        <div className="smurf-form">
            <label>
                Name:
                <input
                    type="text"
                    name="newNameText"
                    value={newName}
                    onChange={handleName}
                />
            </label>
            <label>
                Age:
                <input
                    type="text"
                    name="newAgeText"
                    value={newAge}
                    onChange={handleAge}
                />
            </label>
            <label>
                Height:
                <input
                    type="text"
                    name="newHeightText"
                    value={newHeight}
                    onChange={handleHeight}
                />
            </label>
            <button onClick={handleAddSmurf}>Add Smurf</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

export default connect( mapStateToProps, { addSmurf })(SmurfForm);