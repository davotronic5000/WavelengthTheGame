import React, { ComponentType } from "react";
import { Button, Text, Box } from "rebass";
import { Panel, PanelHeading } from "components";

const CreateRoom: ComponentType = () => {
    return (
        <Panel>
            <PanelHeading>Create a new game</PanelHeading>
            <Text mb={2}>
                This option will allow you to create a new room, you will be
                given a 5 letter code you can give to others to allow them to
                join. You will have control over starting the game, and will be
                able to remove players and change team compositions.
            </Text>
            <Text fontWeight="bold" mb={2}>
                <strong>
                    Caution: As the room creator, if you leave the game once it
                    has begun, the game will not be able to continue.
                </strong>
            </Text>
            <Box sx={{ textAlign: "center" }}>
                <Button width={["100%", "auto"]}>Create room</Button>
            </Box>
        </Panel>
    );
};

export default CreateRoom;
