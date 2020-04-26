import React, { ComponentType, useCallback } from "react";
import useLocalPlayer, { localStateSelectors } from "local-state";
import { Flex, Button, Box } from "rebass";

const PlayerInformation: ComponentType = () => {
    const player = useLocalPlayer();
    const name = localStateSelectors.getName(player);
    const hasName = localStateSelectors.hasName(player);
    const currentRoomCode = localStateSelectors.getCurrentRoomCode(player);
    const hasCurrentRoomCode = localStateSelectors.hasCurrentRoomCode(player);
    const changeName = useCallback(() => {
        if (
            window.confirm(
                "This will cause you to leave your current game. Are you sure?",
            )
        ) {
            localStateSelectors.updateName(player)("");
            localStateSelectors.updateCurrentRoomCode(player)("");
        }
    }, [player]);
    if (hasName) {
        return (
            <Flex
                sx={{
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mx: -3,
                    p: 3,
                    bg: "greyMedium",
                }}
            >
                <Box mr={2}>
                    Hello {name}!
                    {hasCurrentRoomCode
                        ? `You are currently playing in room ${currentRoomCode}. Have fun! 🕵`
                        : ""}
                </Box>
                <Button variant="small" onClick={changeName}>
                    <span role="img" aria-label="A man running">
                        🏃
                    </span>{" "}
                    Forget me!
                </Button>
            </Flex>
        );
    }
    return null;
};

export default PlayerInformation;
