import React, { ComponentType, useContext } from "react";
import { LocalPlayerContext } from "local-state";
import RoomController from "./room-controller";

const ViewController: ComponentType = () => {
    const player = useContext(LocalPlayerContext);
    if (!player.name.length) {
        return <div>What is your name?</div>;
    }
    if (!player.currentRoomCode.length) {
        return (
            <div>
                <div>Enter a room code</div>
                <div>Create a new room</div>
            </div>
        );
    }
    return <RoomController roomCode={player.currentRoomCode} />;
};

export default ViewController;
