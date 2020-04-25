import React, { ComponentType } from "react";
import { Box, Heading } from "rebass";

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
        </Box>
    );
};

export default Header;
