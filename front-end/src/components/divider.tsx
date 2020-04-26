import React, { ComponentType } from "react";
import { Heading } from "rebass";

const Divider: ComponentType = ({ children }) => {
    return (
        <Heading
            sx={{
                textTransform: "uppercase",
                display: "flex",
                my: 3,
                ":before, :after": {
                    content: "''",
                    flex: "1 1",
                    borderBottom: "solid",
                    borderWidth: "4px",
                    borderColor: "dark",
                    m: "auto",
                },
                ":before": {
                    mr: 2,
                },
                ":after": {
                    ml: 2,
                },
            }}
        >
            {children}
        </Heading>
    );
};

export default Divider;
