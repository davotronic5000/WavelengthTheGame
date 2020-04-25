import React, { ComponentType } from "react";
import useLocalPlayerState from "local-state/use-local-player-state";
import RoomController from "./room-controller";

const ViewController: ComponentType = () => {
    const player = useLocalPlayerState();
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
