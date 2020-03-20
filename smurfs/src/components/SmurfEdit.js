import React, { useState } from "react";
import { connect } from "react-redux";

import { editSmurf } from "../actions/smurfActions";

const SmurfEdit = props => {
    const [newName, setNewName] = useState(props.smurf.name)
    const [newAge, setNewAge] = useState(props.smurf.age);
    const [newHeight, setNewHeight] = useState(props.smurf.height);

    const handleName = e => {
        setNewName(e.target.value);
    }
    const handleAge = e => {
        setNewAge(e.target.value);
    }
    const handleHeight = e => {
        setNewHeight(e.target.value);
    }

    const handleEditSmurf = e => {
        e.preventDefault();
        props.editSmurf({
            name: newName,
            age: newAge,
            height: newHeight,
            id: props.smurf.id
        })
    }

    const handleCancelEdit = e => {
        e.preventDefault();
        props.cancelEdit();
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
            <button onClick={handleEditSmurf}>Save Changes</button>
            <button onClick={handleCancelEdit}>Cancel</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

export default connect( mapStateToProps, { editSmurf })(SmurfEdit);