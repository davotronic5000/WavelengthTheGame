import React, { ComponentType } from "react";
import useLocalPlayerState from "local-state/use-local-player-state";
import RoomController from "./room-controller";
import ChooseNameScreen from "choose-name-screen";

const ViewController: ComponentType = () => {
    const player = useLocalPlayerState();
    if (!player.name.length) {
        return <ChooseNameScreen />;
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
