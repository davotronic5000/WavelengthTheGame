import React, { ComponentType } from "react";
import { InputPlusSubmit } from "components";
import useLocalPlayer, { localStateSelectors } from "local-state";
import { Box } from "rebass";
import Heading from "./heading";

const JoinRoom: ComponentType = () => {
    const player = useLocalPlayer();
    const updateCurrentRoomCode = localStateSelectors.updateCurrentRoomCode(
        player,
    );
    return (
        <Box>
            <Heading>Join an existing game</Heading>
            <InputPlusSubmit
                name="joinRoomCode"
                label="Please enter your room code"
                onSubmit={updateCurrentRoomCode}
            />
        </Box>
    );
};

export default JoinRoom;
