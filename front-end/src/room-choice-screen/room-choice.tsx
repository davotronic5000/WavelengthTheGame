import React, { ComponentType } from "react";
import JoinRoom from "./join-room";

const RoomChoice: ComponentType = () => {
    return (
        <div>
            <JoinRoom /> | Create a new room
        </div>
    );
};

export default RoomChoice;
