import React, { ComponentType } from "react";
import useRoom from "room-state";

const RoomController: ComponentType<{ roomCode: string }> = ({ roomCode }) => {
    const room = useRoom(roomCode);
    return <div>Room {roomCode}</div>;
};

export default RoomController;
