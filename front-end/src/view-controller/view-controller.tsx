import React, { ComponentType, useContext } from "react";
import { LocalPlayerContext } from "local-state";
import RoomController from "./room-controller";
import ChooseNameScreen from "choose-name-screen";
import { localStateSelectors } from "local-state";

const ViewController: ComponentType = () => {
    const player = useContext(LocalPlayerContext);
    if (localStateSelectors.hasName(player)) {
        return <ChooseNameScreen />;
    }
    if (localStateSelectors.hasCurrentRoomCode(player)) {
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
