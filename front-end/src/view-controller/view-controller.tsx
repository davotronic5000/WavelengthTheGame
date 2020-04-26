import React, { ComponentType } from "react";
import useLocalPlayer, { localStateSelectors } from "local-state";
import ChooseNameScreen from "choose-name-screen";
import RoomController from "./room-controller";
import RoomChoice from "room-choice-screen";

const ViewController: ComponentType = () => {
    const player = useLocalPlayer();
    if (!localStateSelectors.hasName(player)) {
        return <ChooseNameScreen />;
    }
    if (!localStateSelectors.hasCurrentRoomCode(player)) {
        return <RoomChoice />;
    }
    return <RoomController roomCode={player.currentRoomCode} />;
};

export default ViewController;
