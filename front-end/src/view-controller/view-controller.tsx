import React, { ComponentType } from "react";
import useLocalPlayer, { localStateSelectors } from "local-state";
import ChooseNameScreen from "choose-name-screen";
import RoomController from "./room-controller";

const ViewController: ComponentType = () => {
    const player = useLocalPlayer();
    if (!localStateSelectors.hasName(player)) {
        return <ChooseNameScreen />;
    }
    if (!localStateSelectors.hasCurrentRoomCode(player)) {
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
