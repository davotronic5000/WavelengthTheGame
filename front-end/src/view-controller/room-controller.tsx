import React, { ComponentType } from "react";
import useRoom from "room-state";

const RoomController: ComponentType<{ roomCode: string }> = ({ roomCode }) => {
    const room = useRoom(roomCode);
    return (
        <div>
            Room {roomCode}
            <div>Team 1: {room.team1.players.map((player) => player.name)}</div>
            <div>Team 2: {room.team2.players.map((player) => player.name)}</div>
        </div>
    );
};

export default RoomController;
