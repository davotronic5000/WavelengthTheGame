import React, { ComponentType } from "react";
import { Box, BoxProps } from "rebass";

const Panel: ComponentType<BoxProps> = ({ children, ...rest }) => {
    return (
        <Box
            {...rest}
            sx={{
                maxWidth: 450,
                mx: "auto",
                bg: "greyMedium",
                p: 3,
                border: "solid",
                borderRadius: "default",
            }}
        >
            {children}
        </Box>
    );
};

export default Panel;
