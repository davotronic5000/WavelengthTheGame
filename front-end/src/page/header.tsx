import React, { ComponentType } from "react";
import { Box, Heading } from "rebass";
import { PlayerInformation } from "components";

const Header: ComponentType = () => {
    return (
        <Box>
            <Heading
                as="h1"
                sx={{
                    fontSize: [5, 6, 7],
                    textTransform: "uppercase",
                    textAlign: "center",
                }}
            >
                Wavelength
            </Heading>
            <PlayerInformation />
        </Box>
    );
};

export default Header;
