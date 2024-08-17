import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false); //this will automatically set isEditing value as false

    function handleEditClick() {
        setIsEditing((editing) => !editing); //function to set isEditing value as true when button is clicked

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let btnCaption = 'Edit';
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} /> //this code will execute if isEditing value is true input tag will appear instead span tag will come
        // btnCaption="Save";
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}