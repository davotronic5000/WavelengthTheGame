import React, { ComponentType } from "react";
import { Heading } from "rebass";

const SectionHeading: ComponentType = ({ children }) => {
    return (
        <Heading
            as="h3"
            sx={{ textAlign: "center", mb: 2, fontSize: [3, 4, 5] }}
        >
            {children}
        </Heading>
    );
};

export default SectionHeading;
