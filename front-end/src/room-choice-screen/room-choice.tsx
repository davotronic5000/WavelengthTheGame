import React, { ComponentType } from "react";
import JoinRoom from "./join-room";
import CreateRoom from "./create-room";

const RoomChoice: ComponentType = () => {
    return (
        <div>
            <JoinRoom /> <CreateRoom />
        </div>
    );
};

export default RoomChoice;
