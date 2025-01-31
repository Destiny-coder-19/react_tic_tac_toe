import { useState } from "react";

function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  const HandleEditClick = () => {
    setIsEditing((previousValue) => !previousValue);
  };

  const HandleName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ? (
            <input type="text" value={name} onChange={HandleName} required />
          ) : (
            <span className="player-name">{name}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={HandleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Player;
