import React, { ComponentType } from "react";
import { Box } from "rebass";
import Header from "./header";

const Page: ComponentType = ({ children }) => {
    return (
        <Box p={3}>
            <Header />
            {children}
        </Box>
    );
};

export default Page;
