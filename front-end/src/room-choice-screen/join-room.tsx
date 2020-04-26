import React, { ComponentType } from "react";
import { InputPlusSubmit } from "components";
import useLocalPlayer, { localStateSelectors } from "local-state";
import { Box } from "rebass";

const JoinRoom: ComponentType = () => {
    const player = useLocalPlayer();
    const updateCurrentRoomCode = localStateSelectors.updateCurrentRoomCode(
        player,
    );
    return (
        <Box>
            <InputPlusSubmit
                name="joinRoomCode"
                title="Join an existing game"
                label="Please enter your room code"
                onSubmit={updateCurrentRoomCode}
            />
        </Box>
    );
};

export default JoinRoom;
